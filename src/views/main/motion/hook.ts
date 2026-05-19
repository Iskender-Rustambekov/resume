'use client';

import type { RefObject } from 'react';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
	animateScrollReveals,
	animateStaggeredItems,
	appGsap,
} from '@/shared/lib/gsap';

export const useMainPageMotion = (rootRef: RefObject<HTMLElement | null>) => {
	useGSAP(
		() => {
			const root = rootRef.current;

			if (!root) {
				return;
			}

			const reduceMotion = window.matchMedia(
				'(prefers-reduced-motion: reduce)',
			).matches;

			if (reduceMotion) {
				return;
			}

			animateHero(root);
			animateScrollReveals({ scope: root });
			animateStaggeredItems({ scope: root });
			animateHeroParallax(root);
			animateHeroBreathing(root);

			appGsap.delayedCall(0.2, () => ScrollTrigger.refresh());
		},
		{ scope: rootRef },
	);
};

const animateHero = (root: ParentNode) => {
	appGsap
		.timeline({ defaults: { ease: 'power3.out' } })
		.to(getTargets(root, '[data-motion="nav"]'), {
			y: 0,
			opacity: 1,
			duration: 0.8,
		})
		.to(
			getTargets(root, '[data-motion="hero-copy"] > *'),
			{ y: 0, opacity: 1, duration: 1, stagger: 0.12 },
			'-=0.35',
		)
		.to(
			getTargets(root, '[data-motion="hero-visual"]'),
			{ y: 0, opacity: 1, scale: 1, duration: 1.1 },
			'-=0.75',
		);
};

const animateHeroParallax = (root: ParentNode) => {
	const heroSection = getTarget(root, '[data-motion="hero-section"]');

	if (!heroSection) {
		return;
	}

	const heroTimeline = appGsap.timeline({
		defaults: { ease: 'none' },
		scrollTrigger: {
			trigger: heroSection,
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
		.to(
			getTargets(root, '[data-motion="hero-parallax"]'),
			{
				yPercent: -30,
				scale: 1.08,
			},
			0,
		)
		.to(
			getTargets(root, '[data-motion="hero-copy"]'),
			{
				yPercent: -18,
				opacity: 0.24,
			},
			0,
		)
		.to(heroSection, { opacity: 0.86 }, 0);
};

const animateHeroBreathing = (root: ParentNode) => {
	const heroSection = getTarget(root, '[data-motion="hero-section"]');
	const breathingLayer = getTarget(root, '[data-motion="hero-breathing"]');

	if (!heroSection || !breathingLayer) {
		return;
	}

	const breathingTimeline = appGsap
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

	const breathingVisibilityTrigger = ScrollTrigger.create({
		trigger: heroSection,
		start: 'top bottom',
		end: 'bottom top',
		onEnter: () => breathingTimeline.resume(),
		onEnterBack: () => breathingTimeline.resume(),
		onLeave: () => breathingTimeline.pause(),
		onLeaveBack: () => breathingTimeline.pause(),
	});

	if (!breathingVisibilityTrigger.isActive) {
		breathingTimeline.pause();
	}
};

const getTarget = (root: ParentNode, selector: string) =>
	root.querySelector<HTMLElement>(selector);

const getTargets = (root: ParentNode, selector: string) =>
	Array.from(root.querySelectorAll<HTMLElement>(selector));
