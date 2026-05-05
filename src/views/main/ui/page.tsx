'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import { ThemeSwitch } from '@/entities/theme';
import { appGsap } from '@/shared/lib';
import { PulseLine } from '@/shared/ui/components';

import { ContactsSection } from './contacts';
import { EducationSection } from './education';
import { ExperienceSection } from './experience';
import { HeroSection } from './hero';
import { ProjectsSection } from './projects';
import { SkillsSection } from './skills';

export const MainPageView = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			appGsap.to('.box', { rotation: '+=360' });
		},
		{ scope: containerRef },
	);

	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="mx-auto flex w-full max-w-5xl flex-col px-5 py-8 sm:px-8 lg:px-10">
				<ThemeSwitch />
				<HeroSection />
				<ContactsSection />

				<div className="w-full min-h-10 bg-accent-foreground">
					<PulseLine />
				</div>

				<div
					ref={containerRef}
					className="w-full min-h-10 mt-6 flex justify-around items-center bg-accent-foreground"
				>
					<div className="w-4 h-4 bg-red-700 box"></div>
					<div className="w-4 h-4 bg-red-700 box"></div>
					<div className="w-4 h-4 bg-red-700 box"></div>
					<div className="w-4 h-4 bg-red-700 box"></div>
					<div className="w-4 h-4 bg-red-700 box"></div>
					<div className="w-4 h-4 bg-red-700 box"></div>
				</div>
				<SkillsSection />
				<ExperienceSection />
				<ProjectsSection />
				<EducationSection />
			</div>
		</main>
	);
};
