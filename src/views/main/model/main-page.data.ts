import type { Metric, ProcessStep, Project } from './main-page.types';

export const skills = [
	'React',
	'Next.js',
	'TypeScript',
	'GSAP',
	'Tailwind',
	'Design Systems',
	'FSD',
	'Motion UI',
];

export const heroMetrics: Metric[] = [
	{
		value: '06+',
		label: 'years shaping UI',
	},
	{
		value: '60fps',
		label: 'motion-first feel',
	},
	{
		value: 'A11y',
		label: 'clean by default',
	},
];

export const projects: Project[] = [
	{
		kicker: 'Product system',
		title: 'Aurora Command',
		description:
			'A cinematic analytics workspace with dense data, soft hierarchy and fast decision paths.',
		stack: ['Next.js', 'TypeScript', 'Radix'],
		accent: 'primary',
	},
	{
		kicker: 'Commerce flow',
		title: 'Kintsugi Market',
		description:
			'A premium storefront and admin surface shaped around conversion, speed and editorial rhythm.',
		stack: ['React', 'Zustand', 'Motion'],
		accent: 'secondary',
	},
	{
		kicker: 'Creative tool',
		title: 'Frame Atelier',
		description:
			'A polished interface for composing interactive visuals with timeline-like control.',
		stack: ['Canvas', 'GSAP', 'UI Systems'],
		accent: 'accent',
	},
];

export const processSteps: ProcessStep[] = [
	{
		value: '01',
		title: 'Atmosphere',
		text: 'I start with the emotional frame: light, pace, spacing and the single idea the screen should carry.',
	},
	{
		value: '02',
		title: 'Interface',
		text: 'Then I turn that mood into practical UI: clear states, resilient layout and fast interactions.',
	},
	{
		value: '03',
		title: 'Motion',
		text: 'Finally, motion gives the work a cinematic pulse without stealing attention from the content.',
	},
];

export const contactLinks = {
	email: 'mailto:frontend@example.com',
	github: 'https://github.com/username',
};
