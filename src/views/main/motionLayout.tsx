'use client';

import { useRef } from 'react';

import { useMainPageMotion } from './lib/useMainPageMotion';

interface IMotionLayoutProps {
	children: React.ReactNode;
}
export const MotionLayout = ({ children }: IMotionLayoutProps) => {
	const rootRef = useRef<HTMLElement>(null);

	useMainPageMotion(rootRef);
	return <main ref={rootRef}>{children}</main>;
};
