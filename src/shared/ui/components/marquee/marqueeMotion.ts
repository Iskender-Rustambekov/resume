import { Draggable } from 'gsap/Draggable';

import { appGsap } from '@/shared/lib/gsap';

export interface AnimateMarqueeOptions {
	container: HTMLElement;
	speed?: number;
	reversed?: boolean;
	draggable?: boolean;
	pauseOnHover?: boolean;
	throwResistance?: number;
	minThrowDuration?: number;
	maxThrowDuration?: number;
}

const DEFAULT_SPEED = 1;
const BASE_PIXELS_PER_SECOND = 120;
const MIN_SPEED = 0.05;

type DraggableApi = {
	isThrowing?: boolean;
	endDrag?: (event?: Event) => void;
	kill?: () => void;
};

export const animateMarquee = ({
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
	const cloneItems = () => items.map((item) => {
		const clone = item.cloneNode(true) as HTMLElement;
		clone.setAttribute('aria-hidden', 'true');
		clone.style.pointerEvents = 'none';
		track.appendChild(clone);
		clones.push(clone);
		return clone;
	});

	const firstCloneSet = cloneItems();
	const cycleWidth = firstCloneSet[0].offsetLeft - items[0].offsetLeft;
	if (!cycleWidth) {
		clones.forEach((clone) => clone.remove());
		return () => {};
	}

	while (track.scrollWidth < container.clientWidth + cycleWidth * 2) {
		cloneItems();
	}

	const previousTouchAction = container.style.touchAction;
	const previousUserSelect = container.style.userSelect;

	container.style.touchAction = 'pan-y';
	container.style.userSelect = 'none';

	const proxy = { x: 0 };
	const setTrackX = appGsap.quickSetter(track, 'x', 'px');
	const wrap = appGsap.utils.wrap(-cycleWidth, 0);

	let isDragging = false;
	let isHoverPaused = false;
	let draggableInstance: DraggableApi | undefined;

	const updateTrackPosition = () => {
		setTrackX(wrap(proxy.x));
	};

	const loopTween = appGsap.to(proxy, {
		x: reversed ? cycleWidth : -cycleWidth,
		duration:
			cycleWidth / (BASE_PIXELS_PER_SECOND * Math.max(speed, MIN_SPEED)),
		ease: 'none',
		modifiers: {
			x: (x: string) => `${wrap(parseFloat(x))}`,
		},
		onUpdate: updateTrackPosition,
		repeat: -1,
	});

	const syncLoopProgress = () => {
		const wrapped = wrap(proxy.x);
		const distance = reversed && wrapped !== 0 ? cycleWidth + wrapped : -wrapped;
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

		[draggableInstance] = Draggable.create(track, dragConfig) as DraggableApi[];
	}

	const handlePointerEnter = () => {
		if (!pauseOnHover) {
			return;
		}

		isHoverPaused = true;
		loopTween.pause();
		draggableInstance?.endDrag?.();
	};

	const handlePointerLeave = () => {
		if (!pauseOnHover) {
			return;
		}

		isHoverPaused = false;
		if (!isDragging) {
			resumeLoop();
		}
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
		appGsap.set(track, { clearProps: 'transform' });
	};
};
