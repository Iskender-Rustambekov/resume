import { type Project } from '@/shared/api/generated/portfolio/types';

import { type MainPageLocale } from '../_lib/locale';
import { localizedResponse } from '../_lib/localizedResponse';

const projectsByLocale: Record<MainPageLocale, Project[]> = {
	en: [
		{
			kicker: 'Nomad Games',
			title: 'Casual Multiplayer Games Platform',
			description:
				'Owned frontend architecture, API integration and product-facing game flows for a free-to-play web platform for casual multiplayer board and card games inspired by traditional games from different countries.',
			facts: ['Frontend ownership', 'From zero', 'Multiplayer web games'],
			stack: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'Tailwind'],
			accent: 'primary',
		},
		{
			kicker: 'Outsource delivery',
			title: 'Business Web Systems',
			description:
				'Delivered marketplaces, service websites and admin panels from scratch to production while keeping parallel projects maintainable, SEO-oriented and clear in backend communication.',
			facts: ['2+ parallel projects', 'Production delivery', 'SEO-oriented'],
			stack: [
				'React',
				'Next.js',
				'TypeScript',
				'React Query',
				'Zustand',
				'Tailwind',
			],
			accent: 'secondary',
		},
		{
			kicker: 'Barter marketplace',
			title: 'Exchange Commerce',
			description:
				'Built frontend flows for a non-standard marketplace where users could pay with money or exchange goods, with SSR speed, predictable state and disciplined request handling.',
			facts: ['Barter logic', 'Optimized SSR', 'State discipline'],
			stack: ['Next.js', 'TypeScript', 'React Query', 'Zustand', 'Tailwind'],
			accent: 'accent',
		},
		{
			kicker: 'Marketplace and admin',
			title: 'Admin Commerce',
			description:
				'Improved a marketplace with roles and administration: legacy cleanup, performance fixes, admin surfaces and clearer feature boundaries in a two-developer frontend team.',
			facts: ['Admin panel', 'Legacy cleanup', '2 frontend devs'],
			stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'SCSS'],
			accent: 'primary',
		},
		{
			kicker: 'Bank internal tool',
			title: 'Branch Budgeting',
			description:
				'Built an internal bank budgeting tool shaped like a smarter spreadsheet: tables, formulas, drag-and-drop, branch rules and frontend-side auto calculations.',
			facts: ['Solo frontend', 'Formula logic', 'Drag and drop'],
			stack: [
				'Next.js',
				'TypeScript',
				'Redux Toolkit',
				'Redux Wrapper',
				'Styled Components',
			],
			accent: 'secondary',
		},
	],
	ru: [
		{
			kicker: 'Nomad Games',
			title: 'Casual Multiplayer Games Platform',
			description:
				'Отвечал за frontend-архитектуру, интеграцию API и продуктовые игровые сценарии free-to-play веб-платформы для casual multiplayer настольных и карточных игр, вдохновленных традиционными играми разных стран.',
			facts: ['Ответственность за frontend', 'С нуля', 'Multiplayer web games'],
			stack: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'Tailwind'],
			accent: 'primary',
		},
		{
			kicker: 'Аутсорс-доставка',
			title: 'Business Web Systems',
			description:
				'Доводил маркетплейсы, сервисные сайты и админ-панели с нуля до продакшена, удерживая параллельные проекты поддерживаемыми, SEO-ориентированными и понятными в коммуникации с backend-командой.',
			facts: [
				'2+ проекта параллельно',
				'Доставка в продакшен',
				'SEO-ориентированность',
			],
			stack: [
				'React',
				'Next.js',
				'TypeScript',
				'React Query',
				'Zustand',
				'Tailwind',
			],
			accent: 'secondary',
		},
		{
			kicker: 'Бартерный маркетплейс',
			title: 'Exchange Commerce',
			description:
				'Строил frontend-сценарии для нестандартного маркетплейса, где пользователи могли платить деньгами или обменивать товары, с быстрым SSR, предсказуемым состоянием и дисциплинированной работой с запросами.',
			facts: [
				'Бартерная логика',
				'Оптимизированный SSR',
				'Дисциплина состояния',
			],
			stack: ['Next.js', 'TypeScript', 'React Query', 'Zustand', 'Tailwind'],
			accent: 'accent',
		},
		{
			kicker: 'Маркетплейс и админка',
			title: 'Admin Commerce',
			description:
				'Улучшал маркетплейс с ролями и администрированием: чистил legacy-код, исправлял проблемы производительности, развивал админские интерфейсы и прояснял границы фич в команде из двух frontend-разработчиков.',
			facts: ['Админ-панель', 'Чистка legacy-кода', '2 frontend-разработчика'],
			stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'SCSS'],
			accent: 'primary',
		},
		{
			kicker: 'Внутренний банковский инструмент',
			title: 'Branch Budgeting',
			description:
				'Строил внутренний банковский инструмент бюджетирования в формате умной таблицы: таблицы, формулы, drag-and-drop, правила филиалов и автоматические расчеты на стороне frontend.',
			facts: ['Solo frontend', 'Логика формул', 'Drag-and-drop'],
			stack: [
				'Next.js',
				'TypeScript',
				'Redux Toolkit',
				'Redux Wrapper',
				'Styled Components',
			],
			accent: 'secondary',
		},
	],
};

export const getProjectsResponse = (request: Request) =>
	localizedResponse(request, projectsByLocale);
