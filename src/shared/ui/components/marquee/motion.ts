import { type RefObject } from 'react';

import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';

import { appGsap } from '@/shared/lib/gsap';

interface AnimateMarqueeOptions {
	container: HTMLElement;
	speed?: number;
	reversed?: boolean;
	draggable?: boolean;
	pauseOnHover?: boolean;
	throwResistance?: number;
	minThrowDuration?: number;
	maxThrowDuration?: number;
}
export type UseMarqueeMotionOptions = Omit<AnimateMarqueeOptions, 'container'>;

export const useMarqueeMotion = (
	containerRef: RefObject<HTMLDivElement | null>,
	options: UseMarqueeMotionOptions,
) => {
	useGSAP(
		() => {
			const container = containerRef.current;

			if (!container) {
				return undefined;
			}

			return animateMarquee({
				container,
				...options,
			});
		},
		{
			scope: containerRef,
			dependencies: [
				options.speed,
				options.reversed,
				options.draggable,
				options.pauseOnHover,
				options.throwResistance,
				options.minThrowDuration,
				options.maxThrowDuration,
			],
			revertOnUpdate: true,
		},
	);
};

const DEFAULT_SPEED = 1;
// Baseline scroll rate; effective px/s is this times `speed`.
const BASE_PIXELS_PER_SECOND = 120;
// Avoid divide-by-zero and near-stall when callers pass tiny values.
const MIN_SPEED = 0.05;

type DraggableApi = {
	isThrowing?: boolean;
	endDrag?: (event?: Event) => void;
	kill?: () => void;
};

// Infinite horizontal marquee: clones content until wide enough, tweens a wrapped proxy,
// optional Draggable on the track. Returns a teardown that removes listeners, clones, and tweens.
const animateMarquee = ({
	container,
	speed = DEFAULT_SPEED,
	reversed = false,
	draggable = true,
	pauseOnHover = true,
	throwResistance = 1000,
	minThrowDuration = 0.08,
	maxThrowDuration = 0.8,
}: AnimateMarqueeOptions): (() => void) => {
	const track = container.querySelector<HTMLElement>('[data-marquee-track]');
	if (!track) {
		return () => {};
	}

	const items = Array.from(
		track.querySelectorAll<HTMLElement>('[data-marquee-item]'),
	);
	if (!items.length) {
		return () => {};
	}

	const clones: HTMLElement[] = [];
	// Duplicate the original row so we can scroll one "cycle" and reset without a visible seam.
	const cloneItems = () =>
		items.map((item) => {
			const clone = item.cloneNode(true) as HTMLElement;
			clone.setAttribute('aria-hidden', 'true');
			clone.style.pointerEvents = 'none';
			track.appendChild(clone);
			clones.push(clone);
			return clone;
		});

	const firstCloneSet = cloneItems();
	// Horizontal distance from first real item to its clone — one full repeat unit in layout space.
	const cycleWidth = firstCloneSet[0].offsetLeft - items[0].offsetLeft;
	if (!cycleWidth) {
		clones.forEach((clone) => clone.remove());
		return () => {};
	}

	// Widen the strip until we always have off-screen content on both sides while translating.
	while (track.scrollWidth < container.clientWidth + cycleWidth * 2) {
		cloneItems();
	}

	const previousTouchAction = container.style.touchAction;
	const previousUserSelect = container.style.userSelect;

	// Let vertical scrolling pass through the page; horizontal is ours (drag + marquee).
	container.style.touchAction = 'pan-y';
	container.style.userSelect = 'none';

	// Tween `proxy.x` with wrap modifiers; `quickSetter` applies the wrapped value to the track (cheaper than gsap.set each frame).
	const proxy = { x: 0 };
	const setTrackX = appGsap.quickSetter(track, 'x', 'px');
	const wrap = appGsap.utils.wrap(-cycleWidth, 0);

	let isDragging = false;
	let isHoverPaused = false;
	let draggableInstance: DraggableApi | undefined;

	const updateTrackPosition = () => setTrackX(wrap(proxy.x));

	const loopTween = appGsap.to(proxy, {
		x: reversed ? cycleWidth : -cycleWidth,
		duration:
			cycleWidth / (BASE_PIXELS_PER_SECOND * Math.max(speed, MIN_SPEED)),
		ease: 'none',
		modifiers: {
			// Keeps proxy in [-cycleWidth, 0) so repeat is visually seamless.
			x: (x: string) => `${wrap(parseFloat(x))}`,
		},
		onUpdate: updateTrackPosition,
		repeat: -1,
	});

	// After a drag, map current wrapped offset to the infinite tween's progress so resume doesn't jump.
	const syncLoopProgress = () => {
		const wrapped = wrap(proxy.x);
		const distance =
			reversed && wrapped !== 0 ? cycleWidth + wrapped : -wrapped;
		loopTween.progress(distance / cycleWidth).pause();
		updateTrackPosition();
	};

	const resumeLoop = () => {
		syncLoopProgress();
		if (!isHoverPaused) {
			loopTween.play();
		}
	};

	const syncProxyFromDrag = (rawX: number) => {
		proxy.x = rawX;
		updateTrackPosition();
	};

	if (draggable) {
		const dragConfig = {
			trigger: container,
			type: 'x' as const,
			inertia: true,
			throwResistance,
			minDuration: minThrowDuration,
			maxDuration: maxThrowDuration,
			onPress(this: { x: number }) {
				isDragging = true;
				loopTween.pause();
				syncProxyFromDrag(this.x);
			},
			onDrag(this: { x: number }) {
				syncProxyFromDrag(this.x);
			},
			onRelease(this: { isThrowing?: boolean }) {
				isDragging = false;
				// If inertia is active, wait for throw callbacks; otherwise resume immediately.
				if (!this.isThrowing) {
					resumeLoop();
				}
			},
			onThrowUpdate(this: { x: number }) {
				syncProxyFromDrag(this.x);
			},
			onThrowComplete() {
				resumeLoop();
			},
			allowEventDefault: false,
			cursor: 'grab',
			activeCursor: 'grabbing',
		};

		// Draggable moves the track; we still drive `proxy.x` so wrap + auto-scroll stay in sync.
		[draggableInstance] = Draggable.create(track, dragConfig) as DraggableApi[];
	}

	const handlePointerEnter = () => {
		if (!pauseOnHover) return;

		isHoverPaused = true;
		loopTween.pause();
		// Kill any in-flight throw so we don't fight the paused loop.
		draggableInstance?.endDrag?.();
	};

	const handlePointerLeave = () => {
		if (!pauseOnHover) return;

		isHoverPaused = false;
		// If user is still dragging, resume on release/throw complete instead.
		if (!isDragging) resumeLoop();
	};

	container.addEventListener('pointerenter', handlePointerEnter);
	container.addEventListener('pointerleave', handlePointerLeave);

	return () => {
		loopTween.kill();
		draggableInstance?.kill?.();
		clones.forEach((clone) => clone.remove());
		container.style.touchAction = previousTouchAction;
		container.style.userSelect = previousUserSelect;
		container.removeEventListener('pointerenter', handlePointerEnter);
		container.removeEventListener('pointerleave', handlePointerLeave);
		// Drop GSAP's transform so layout returns to CSS-only after unmount.
		appGsap.set(track, { clearProps: 'transform' });
	};
};
