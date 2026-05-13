'use client';

import { useRef } from 'react';

import { Header } from '@/widgets/layout';

import { ContentParticles, PageBackground } from './components';
import {
	ContactSection,
	CraftSection,
	ExperienceSection,
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
		<main ref={rootRef} className={`${styles.root} min-h-screen`}>
			<PageBackground />
			<Header />

			<HeroSection />
			<div data-motion="post-hero-content" className={styles.contentPanel}>
				<ContentParticles />
				<div className={styles.contentInner}>
					<FramesSection />
					<CraftSection />
					<ExperienceSection />
					<StackSection />

					<ContactSection />
					<Footer />
				</div>
			</div>
		</main>
	);
};
