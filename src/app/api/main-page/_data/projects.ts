import { type Project } from '@/shared/api/generated/portfolio/types';

import { type MainPageLocale } from '../_lib/locale';
import { localizedResponse } from '../_lib/localizedResponse';

const projectsByLocale: Record<MainPageLocale, Project[]> = {
	en: [
		{
			kicker: 'NomadGames',
			title: 'Browser Multiplayer Games Platform',
			description:
				'Frontend for a free web platform for browser multiplayer games, built from zero around product architecture, UI, state, API contracts and real-time interaction through Centrifugo and WebSockets.',
			facts: ['Frontend from zero', 'Real-time flows', 'Reusable managers'],
			stack: [
				'React',
				'TypeScript',
				'FSD',
				'Zustand',
				'TanStack Query',
				'Centrifugo',
				'Tailwind',
			],
			accent: 'primary',
		},
		{
			kicker: 'DATAxWAY',
			title: 'E-commerce, Marketplaces and Admin Panels',
			description:
				'Business-facing web systems with SEO-oriented Next.js pages, heavy interactive tables, dynamic filters, multi-step forms and reusable UI-kit components extracted from legacy screens.',
			facts: ['SSR / SSG / ISR', 'FCP / LCP work', 'Reusable UI-kit'],
			stack: [
				'Next.js',
				'React',
				'TypeScript',
				'FSD',
				'TanStack Query',
				'Zustand',
				'Tailwind',
			],
			accent: 'secondary',
		},
		{
			kicker: 'GetByVerto',
			title: 'Auction and Barter Marketplace',
			description:
				'Marketplace frontend where users could buy goods, offer their own goods in exchange, or combine payment and barter. The work focused on typed contracts, predictable cache updates and reusable marketplace scenarios.',
			facts: ['Auction flows', 'Barter model', 'Typed API layer'],
			stack: [
				'Next.js',
				'React',
				'TypeScript',
				'Orval',
				'TanStack Query',
				'Zustand',
				'Tailwind',
			],
			accent: 'accent',
		},
		{
			kicker: 'Welive Turkish Company',
			title: 'Home Goods E-commerce',
			description:
				'E-commerce platform for home goods and room fragrance products, including catalog pages, product cards, forms, tables, admin sections and role-based interfaces for different access levels.',
			facts: ['Catalog and admin', 'Role-based UI', 'Redux Toolkit state'],
			stack: [
				'Next.js',
				'React',
				'TypeScript',
				'Redux Toolkit',
				'Material UI',
				'SCSS',
			],
			accent: 'primary',
		},
		{
			kicker: 'Budgeting OAPiSR',
			title: 'Bank Budgeting System',
			description:
				'Internal banking budgeting system with tables, formulas, calculated data and branch structure. The frontend handled complex table scenarios, tree structures, validation states and slow request behavior.',
			facts: ['Complex tables', 'Formula logic', 'Branch structure'],
			stack: [
				'React',
				'Next.js',
				'Ant Design',
				'Styled Components',
				'REST API',
			],
			accent: 'secondary',
		},
	],
	ru: [
		{
			kicker: 'NomadGames',
			title: 'Платформа браузерных multiplayer-игр',
			description:
				'Frontend бесплатной веб-платформы для браузерных multiplayer-игр, построенный с нуля вокруг архитектуры приложения, UI, состояния, API-контрактов и real-time взаимодействия через Centrifugo и WebSockets.',
			facts: [
				'Frontend с нуля',
				'Real-time сценарии',
				'Переиспользуемые менеджеры',
			],
			stack: [
				'React',
				'TypeScript',
				'FSD',
				'Zustand',
				'TanStack Query',
				'Centrifugo',
				'Tailwind',
			],
			accent: 'primary',
		},
		{
			kicker: 'DATAxWAY',
			title: 'E-commerce, marketplace и админ-панели',
			description:
				'Веб-системы для бизнеса: SEO-ориентированные страницы на Next.js, тяжелые интерактивные таблицы, динамическая фильтрация, многошаговые формы и UI-kit компоненты, вынесенные из legacy-экранов.',
			facts: [
				'SSR / SSG / ISR',
				'Оптимизация FCP / LCP',
				'Переиспользуемый UI-kit',
			],
			stack: [
				'Next.js',
				'React',
				'TypeScript',
				'FSD',
				'TanStack Query',
				'Zustand',
				'Tailwind',
			],
			accent: 'secondary',
		},
		{
			kicker: 'GetByVerto',
			title: 'Marketplace с аукционами и бартером',
			description:
				'Frontend marketplace-платформы, где пользователи могли покупать товары за деньги, предлагать свои товары в обмен или комбинировать оплату и бартер. Работа была сфокусирована на типизированных контрактах, предсказуемом обновлении кэша и переиспользуемых marketplace-сценариях.',
			facts: ['Аукционы', 'Бартерная модель', 'Типизированный API-слой'],
			stack: [
				'Next.js',
				'React',
				'TypeScript',
				'Orval',
				'TanStack Query',
				'Zustand',
				'Tailwind',
			],
			accent: 'accent',
		},
		{
			kicker: 'Welive Turkish Company',
			title: 'E-commerce для товаров для дома',
			description:
				'Платформа для продажи товаров для дома и ароматизации помещений: страницы каталога, карточки товаров, формы, таблицы, административные разделы и интерфейсы для разных уровней доступа.',
			facts: [
				'Каталог и админка',
				'Ролевые интерфейсы',
				'Состояние на Redux Toolkit',
			],
			stack: [
				'Next.js',
				'React',
				'TypeScript',
				'Redux Toolkit',
				'Material UI',
				'SCSS',
			],
			accent: 'primary',
		},
		{
			kicker: 'Budgeting OAPiSR',
			title: 'Банковская система бюджетирования',
			description:
				'Внутренняя банковская система бюджетирования с таблицами, формулами, расчетными данными и филиальной структурой. Frontend покрывал сложные табличные сценарии, древовидные структуры, состояния валидации и поведение при медленных запросах.',
			facts: ['Сложные таблицы', 'Логика формул', 'Филиальная структура'],
			stack: [
				'React',
				'Next.js',
				'Ant Design',
				'Styled Components',
				'REST API',
			],
			accent: 'secondary',
		},
	],
};

export const getProjectsResponse = (request: Request) =>
	localizedResponse(request, projectsByLocale);
