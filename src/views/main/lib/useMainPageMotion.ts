'use client';

import type { RefObject } from 'react';

import { useGSAP } from '@gsap/react';

import { appGsap } from '@/shared/lib/gsap';

export const useMainPageMotion = (rootRef: RefObject<HTMLElement | null>) => {
	useGSAP(
		() => {
			const reduceMotion = window.matchMedia(
				'(prefers-reduced-motion: reduce)',
			).matches;

			if (reduceMotion) {
				return;
			}

			animateHero();
			animateReveals();
			animatePanels();
			animateHeroParallax();

			const mediaMotion = appGsap.matchMedia();
			animateShowcase(mediaMotion);

			return () => {
				mediaMotion.revert();
			};
		},
		{ scope: rootRef },
	);
};

const animateHero = () => {
	appGsap
		.timeline({ defaults: { ease: 'power3.out' } })
		.from('[data-motion="nav"]', { y: -24, opacity: 0, duration: 0.8 })
		.from(
			'[data-motion="hero-copy"] > *',
			{ y: 42, opacity: 0, duration: 1, stagger: 0.12 },
			'-=0.35',
		)
		.from(
			'[data-motion="hero-visual"]',
			{ y: 56, opacity: 0, scale: 0.96, duration: 1.1 },
			'-=0.75',
		)
		.from(
			'[data-motion="hero-metric"]',
			{ y: 24, opacity: 0, duration: 0.7, stagger: 0.08 },
			'-=0.5',
		);
};

const animateReveals = () => {
	appGsap.utils
		.toArray<HTMLElement>('[data-motion="reveal"]')
		.forEach((element) => {
			appGsap.from(element, {
				y: 56,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: element,
					start: 'top 78%',
				},
			});
		});
};

const animatePanels = () => {
	appGsap.utils
		.toArray<HTMLElement>('[data-motion="stagger-panel"]')
		.forEach((panel) => {
			appGsap.from(panel.children, {
				y: 34,
				opacity: 0,
				duration: 0.85,
				ease: 'power3.out',
				stagger: 0.08,
				scrollTrigger: {
					trigger: panel,
					start: 'top 76%',
				},
			});
		});
};

const animateHeroParallax = () => {
	appGsap.to('[data-motion="hero-parallax"]', {
		yPercent: -14,
		ease: 'none',
		scrollTrigger: {
			trigger: '[data-motion="hero-section"]',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
		},
	});
};

const animateShowcase = (mediaMotion: gsap.MatchMedia) => {
	mediaMotion.add('(min-width: 768px)', () => {
		appGsap.to('[data-motion="showcase-track"]', {
			xPercent: -58,
			ease: 'none',
			scrollTrigger: {
				trigger: '[data-motion="showcase-pin"]',
				start: 'top top',
				end: '+=1800',
				scrub: 0.8,
				pin: true,
			},
		});
	});
};
