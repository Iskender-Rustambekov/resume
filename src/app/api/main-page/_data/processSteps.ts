import { type ProcessStep } from '@/shared/api/generated/portfolio/types';

import { type MainPageLocale } from '../_lib/locale';
import { localizedResponse } from '../_lib/localizedResponse';

const processStepsByLocale: Record<MainPageLocale, ProcessStep[]> = {
	en: [
		{
			value: '01',
			title: 'Design frontend architecture',
			text: 'Structure React and Next.js applications with clear feature boundaries, shared layers and predictable ownership so the product can grow without turning into a collection of isolated screens.',
			metric: 'architecture',
			tone: 'Useful for products built from zero or codebases that need order after fast delivery.',
		},
		{
			value: '02',
			title: 'Stabilize API-heavy flows',
			text: 'Work with REST APIs, OpenAPI contracts, Orval-generated clients, DTO expectations, loading states, errors and cache invalidation so frontend and backend behavior stays aligned.',
			metric: 'contracts',
			tone: 'Useful when product reliability depends on clear data contracts and predictable async behavior.',
		},
		{
			value: '03',
			title: 'Handle complex product UI',
			text: 'Build admin panels, heavy tables, filters, multi-step forms, roles, permissions and edge cases with explicit state models instead of hidden UI assumptions.',
			metric: 'complex UI',
			tone: 'Useful when the hard part is business logic, not just rendering the screen.',
		},
		{
			value: '04',
			title: 'Implement real-time behavior',
			text: 'Integrate WebSockets and Centrifugo flows with reconnect handling, screen visibility states, asset loading and user-facing edge cases for interactive products.',
			metric: 'real-time',
			tone: 'Useful for multiplayer, live-status and event-driven interfaces.',
		},
	],
	ru: [
		{
			value: '01',
			title: 'Проектирую frontend-архитектуру',
			text: 'Структурирую React и Next.js приложения через понятные границы фич, общие слои и предсказуемую ответственность, чтобы продукт мог расти без превращения в набор разрозненных экранов.',
			metric: 'architecture',
			tone: 'Полезно для продуктов с нуля и кодовых баз, которым нужен порядок после быстрой доставки.',
		},
		{
			value: '02',
			title: 'Стабилизирую API-нагруженные сценарии',
			text: 'Работаю с REST API, OpenAPI-контрактами, Orval-клиентами, DTO, состояниями загрузки, ошибками и инвалидацией кэша, чтобы frontend и backend оставались согласованными.',
			metric: 'contracts',
			tone: 'Полезно, когда надежность продукта зависит от четких контрактов данных и предсказуемой асинхронности.',
		},
		{
			value: '03',
			title: 'Собираю сложный продуктовый UI',
			text: 'Разрабатываю админ-панели, тяжелые таблицы, фильтры, многошаговые формы, роли, права доступа и edge cases через явные модели состояния, а не скрытые UI-допущения.',
			metric: 'complex UI',
			tone: 'Полезно, когда сложная часть находится в бизнес-логике, а не только в отрисовке экрана.',
		},
		{
			value: '04',
			title: 'Интегрирую real-time поведение',
			text: 'Подключаю WebSockets и Centrifugo-сценарии с переподключением, состояниями видимости экрана, загрузкой ассетов и пользовательскими edge cases для интерактивных продуктов.',
			metric: 'real-time',
			tone: 'Полезно для multiplayer, live-status и event-driven интерфейсов.',
		},
	],
};

export const getProcessStepsResponse = (request: Request) =>
	localizedResponse(request, processStepsByLocale);
