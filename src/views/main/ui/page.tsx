'use client';

import { useRef } from 'react';

import { Header } from '@/widgets/layout';

import { PageBackground } from './components';
import {
	ContactSection,
	CraftSection,
	Footer,
	FramesSection,
	HeroSection,
	StackSection,
} from './sections';
import { useMainPageMotion } from '../lib/useMainPageMotion';

import styles from './main-page.module.css';

export const MainPageView = () => {
	const rootRef = useRef<HTMLElement>(null);

	useMainPageMotion(rootRef);

	return (
		<main
			ref={rootRef}
			className={`${styles.root} min-h-screen overflow-hidden`}
		>
			<PageBackground />
			<Header />
			<HeroSection />
			<CraftSection />
			<FramesSection />
			<StackSection />
			<ContactSection />
			<Footer />
		</main>
	);
};
