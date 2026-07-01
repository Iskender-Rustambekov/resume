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
			pinHeroForCurtain(root);

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

const pinHeroForCurtain = (root: ParentNode) => {
	const heroSection = getTarget(root, '[data-motion="hero-section"]');

	if (!heroSection) {
		return;
	}

	ScrollTrigger.create({
		trigger: heroSection,
		start: 'top top',
		end: '+=80%',
		pin: true,
		pinSpacing: false,
		anticipatePin: 1,
		invalidateOnRefresh: true,
		refreshPriority: 1,
	});
};

const getTarget = (root: ParentNode, selector: string) =>
	root.querySelector<HTMLElement>(selector);

const getTargets = (root: ParentNode, selector: string) =>
	Array.from(root.querySelectorAll<HTMLElement>(selector));
