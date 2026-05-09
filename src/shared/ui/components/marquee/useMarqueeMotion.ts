'use client';

import type { RefObject } from 'react';

import { useGSAP } from '@gsap/react';

import { animateMarquee, type AnimateMarqueeOptions } from './marqueeMotion';

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
