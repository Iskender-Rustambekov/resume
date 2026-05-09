'use client';

import { Children, type ReactNode, useRef } from 'react';

import cn from 'clsx';

import { useMarqueeMotion } from './useMarqueeMotion';

import styles from './marquee.module.css';

export interface IMarqueeProps {
	children: ReactNode;
	speed?: number;
	reversed?: boolean;
	draggable?: boolean;
	pauseOnHover?: boolean;
	throwResistance?: number;
	minThrowDuration?: number;
	maxThrowDuration?: number;
	className?: string;
	trackClassName?: string;
	ariaLabel?: string;
}

export const Marquee = ({
	children,
	speed = 1,
	reversed = false,
	draggable = true,
	pauseOnHover = true,
	throwResistance,
	minThrowDuration,
	maxThrowDuration,
	className,
	trackClassName,
	ariaLabel = 'Scrolling marquee',
}: IMarqueeProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useMarqueeMotion(containerRef, {
		speed,
		reversed,
		draggable,
		pauseOnHover,
		throwResistance,
		minThrowDuration,
		maxThrowDuration,
	});

	return (
		<div
			ref={containerRef}
			className={cn(styles.root, className)}
			data-marquee-container
			role="region"
			aria-label={ariaLabel}
		>
			<div className={cn(styles.track, trackClassName)} data-marquee-track>
				{Children.map(children, (child, index) => (
					<div key={index} className={styles.item} data-marquee-item>
						{child}
					</div>
				))}
			</div>
		</div>
	);
};
