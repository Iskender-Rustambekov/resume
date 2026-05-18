import { appGsap } from './util';

import type { ScrollTrigger } from 'gsap/ScrollTrigger';

type TScrollTriggerVars = ScrollTrigger['vars'];

interface IRevealAnimationOptions {
	selector?: string;
	scope?: ParentNode;
	y?: number;
	duration?: number;
	ease?: string;
	start?: string;
	once?: boolean;
	scrollTrigger?: TScrollTriggerVars;
}
export const animateScrollReveals = ({
	selector = '[data-motion="reveal"]',
	scope = document,
	y = 0,
	duration = 1,
	ease = 'power3.out',
	start = 'top 78%',
	once = true,
	scrollTrigger,
}: IRevealAnimationOptions = {}) => {
	getTargets(selector, scope).forEach((element) => {
		appGsap.to(element, {
			y,
			opacity: 1,
			duration,
			ease,
			scrollTrigger: {
				trigger: element,
				start,
				once,
				...scrollTrigger,
			},
		});
	});
};

interface IStaggerChildrenAnimationOptions {
	selector?: string;
	childSelector?: string;
	scope?: ParentNode;
	y?: number;
	duration?: number;
	opacityDuration?: number;
	ease?: string;
	stagger?: number;
	start?: string;
	once?: boolean;
	scrollTrigger?: TScrollTriggerVars;
}
export const animateStaggeredChildren = ({
	selector = '[data-motion="stagger-panel"]',
	childSelector = ':scope > *',
	scope = document,
	y = 0,
	duration = 0.85,
	opacityDuration = 0.24,
	ease = 'power3.out',
	stagger = 0.08,
	start = 'top 76%',
	once = true,
	scrollTrigger,
}: IStaggerChildrenAnimationOptions = {}) => {
	getTargets(selector, scope).forEach((panel) => {
		const children = getTargets(childSelector, panel);

		appGsap
			.timeline({
				scrollTrigger: {
					trigger: panel,
					start,
					once,
					...scrollTrigger,
				},
			})
			.set(children, { visibility: 'visible' })
			.to(
				children,
				{
					opacity: 1,
					duration: opacityDuration,
					ease: 'power1.out',
					stagger,
				},
				0,
			)
			.to(
				children,
				{
					y,
					duration,
					ease,
					stagger,
				},
				0,
			);
	});
};

export const animateStaggeredItems = ({
	selector = '[data-motion="stagger-panel"]',
	childSelector = '[data-motion="stagger-item"]',
	...options
}: IStaggerChildrenAnimationOptions = {}) => {
	animateStaggeredChildren({
		selector,
		childSelector,
		...options,
	});
};

const getTargets = (selector: string, scope: ParentNode) =>
	Array.from(scope.querySelectorAll<HTMLElement>(selector));
