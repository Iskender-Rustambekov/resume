'use client';

import type { RefObject } from 'react';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
			animateHeroBreathing();

			appGsap.delayedCall(0.2, () => ScrollTrigger.refresh());
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
			appGsap.fromTo(
				panel.children,
				{ y: 34, autoAlpha: 0 },
				{
					y: 0,
					autoAlpha: 1,
					duration: 0.85,
					ease: 'power3.out',
					immediateRender: false,
					stagger: 0.08,
					scrollTrigger: {
						trigger: panel,
						start: 'top 76%',
					},
				},
			);
		});
};

const animateHeroParallax = () => {
	const heroTimeline = appGsap.timeline({
		defaults: { ease: 'none' },
		scrollTrigger: {
			trigger: '[data-motion="hero-section"]',
			start: 'top top',
			end: '+=80%',
			scrub: true,
			pin: true,
			pinSpacing: false,
			anticipatePin: 1,
			invalidateOnRefresh: true,
			refreshPriority: 1,
		},
	});

	heroTimeline
		.to('[data-motion="hero-parallax"]', { yPercent: -30, scale: 1.08 }, 0)
		.to('[data-motion="hero-copy"]', { yPercent: -18, opacity: 0.24 }, 0)
		.to('[data-motion="hero-section"]', { opacity: 0.86 }, 0);
};

const animateHeroBreathing = () => {
	const breathingLayer = '[data-motion="hero-breathing"]';

	appGsap
		.timeline({
			repeat: -1,
			yoyo: true,
			defaults: {
				duration: 3.8,
				ease: 'sine.inOut',
				transformOrigin: '50% 70%',
			},
		})
		.to(breathingLayer, {
			x: 10,
			y: -14,
			scale: 1.06,
		})
		.to(breathingLayer, {
			x: -8,
			y: 8,
			scale: 1.04,
			duration: 4.2,
		});
};

const animateContentParticles = () => {
	appGsap.utils
		.toArray<HTMLElement>('[data-motion="content-particle"]')
		.forEach((particle, index) => {
			appGsap.to(particle, {
				x: appGsap.utils.random(-90, 90),
				y: appGsap.utils.random(-220, -520),
				scale: appGsap.utils.random(0.75, 1.65),
				opacity: appGsap.utils.random(0.34, 0.78),
				duration: appGsap.utils.random(9, 18),
				delay: index * 0.11,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true,
				repeatRefresh: true,
			});
		});
};
