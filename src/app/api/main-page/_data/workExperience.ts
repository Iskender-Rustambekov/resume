import { type ExperienceItem } from '@/shared/api/generated/portfolio/types';

import { type MainPageLocale } from '../_lib/locale';
import { localizedResponse } from '../_lib/localizedResponse';

const workExperienceByLocale: Record<MainPageLocale, ExperienceItem[]> = {
	en: [
		{
			role: 'Frontend Web Developer',
			company: 'Confidential company',
			employmentType: 'Confidential',
			period: 'Sep 2024 - Jan 2026',
			duration: '1 year 5 months',
			location: 'Confidential',
			mode: 'Product work',
			stack: ['React.js', 'TypeScript', 'Game launcher', 'Arcade games'],
			description:
				'Frontend team lead for a real-time game launcher built from scratch.',
		},
		{
			role: 'Frontend Web Developer',
			company: 'DATAxWAY',
			employmentType: 'Full-time',
			period: 'Aug 2023 - Jun 2024',
			duration: '11 months',
			location: 'Bishkek, Kyrgyzstan',
			mode: 'Office',
			stack: ['React.js', 'TypeScript', 'Frontend architecture'],
			description:
				'Product interfaces, marketplaces, admin panels and SEO-oriented websites.',
		},
		{
			role: 'Frontend Web Developer',
			company: 'GetByVerto',
			employmentType: 'Full-time',
			period: 'Aug 2022 - Aug 2023',
			duration: '1 year 1 month',
			location: 'Kazakhstan',
			mode: 'Remote',
			stack: ['TypeScript', 'Next.js'],
			description:
				'Remote frontend delivery for Next.js products with typed backend contracts.',
		},
		{
			role: 'Frontend Web Developer',
			company: 'Welive turkish company',
			employmentType: 'Full-time',
			period: 'Jan 2022 - Jul 2022',
			duration: '7 months',
			location: 'Bishkek, Kyrgyzstan',
			mode: 'Office',
			stack: ['TypeScript', 'Next.js'],
			description:
				'Frontend features for web products in a fast-moving company environment.',
		},
		{
			role: 'Frontend Developer',
			company: 'Budgeting OAPiSR',
			employmentType: 'Contract',
			period: 'Oct 2021 - Jan 2022',
			duration: '4 months',
			location: 'Bishkek, Kyrgyzstan',
			mode: 'Remote',
			stack: ['Budget systems', 'Bank branch logic'],
			description:
				'Internal banking budgeting system with formula logic and table interactions.',
		},
	],
	ru: [
		{
			role: 'Frontend Web Developer',
			company: 'Конфиденциальная компания',
			employmentType: 'Конфиденциально',
			period: 'Сен 2024 - Янв 2026',
			duration: '1 год 5 месяцев',
			location: 'Конфиденциально',
			mode: 'Продуктовая работа',
			stack: ['React.js', 'TypeScript', 'Game launcher', 'Arcade games'],
			description:
				'Frontend team lead для real-time игрового лаунчера, построенного с нуля.',
		},
		{
			role: 'Frontend Web Developer',
			company: 'DATAxWAY',
			employmentType: 'Полная занятость',
			period: 'Авг 2023 - Июн 2024',
			duration: '11 месяцев',
			location: 'Бишкек, Кыргызстан',
			mode: 'Офис',
			stack: ['React.js', 'TypeScript', 'Frontend architecture'],
			description:
				'Продуктовые интерфейсы, маркетплейсы, админ-панели и SEO-ориентированные сайты.',
		},
		{
			role: 'Frontend Web Developer',
			company: 'GetByVerto',
			employmentType: 'Полная занятость',
			period: 'Авг 2022 - Авг 2023',
			duration: '1 год 1 месяц',
			location: 'Казахстан',
			mode: 'Удаленно',
			stack: ['TypeScript', 'Next.js'],
			description:
				'Удаленная frontend-разработка Next.js-продуктов с типизированными backend-контрактами.',
		},
		{
			role: 'Frontend Web Developer',
			company: 'Welive Turkish Company',
			employmentType: 'Полная занятость',
			period: 'Янв 2022 - Июл 2022',
			duration: '7 месяцев',
			location: 'Бишкек, Кыргызстан',
			mode: 'Офис',
			stack: ['TypeScript', 'Next.js'],
			description:
				'Frontend-фичи для веб-продуктов в динамичной продуктовой среде.',
		},
		{
			role: 'Frontend Developer',
			company: 'Budgeting OAPiSR',
			employmentType: 'Контракт',
			period: 'Окт 2021 - Янв 2022',
			duration: '4 месяца',
			location: 'Бишкек, Кыргызстан',
			mode: 'Удаленно',
			stack: ['Budget systems', 'Bank branch logic'],
			description:
				'Внутренняя банковская система бюджетирования с логикой формул и табличными взаимодействиями.',
		},
	],
};

export const getWorkExperienceResponse = (request: Request) =>
	localizedResponse(request, workExperienceByLocale);
