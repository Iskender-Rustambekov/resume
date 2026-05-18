import { type ProcessStep } from '@/shared/api/generated/portfolio/types';

import { type MainPageLocale } from '../_lib/locale';
import { localizedResponse } from '../_lib/localizedResponse';

const processStepsByLocale: Record<MainPageLocale, ProcessStep[]> = {
	en: [
		{
			value: '01',
			title: 'Shape frontend architecture',
			text: 'Choose structure, split features, define shared layers and keep the codebase readable when the product starts growing.',
			metric: 'structure',
			tone: 'Useful when a product starts from zero or needs order after fast growth.',
		},
		{
			value: '02',
			title: 'Connect frontend with backend',
			text: 'Work with API contracts, DTO mapping, request layers, loading/error states and the small details that make async behavior predictable.',
			metric: 'contracts',
			tone: 'Useful when frontend and backend must stop guessing about each other.',
		},
		{
			value: '03',
			title: 'Handle product rules',
			text: 'Turn roles, permissions, edge cases, forms, cache and state transitions into explicit frontend behavior instead of hidden bugs.',
			metric: 'rules',
			tone: 'Useful when the hard part is not the screen, but the rules behind it.',
		},
		{
			value: '04',
			title: 'Keep delivery aligned',
			text: 'Write technical requirements, clarify implementation details with backend/design, communicate tradeoffs and keep work connected to business goals.',
			metric: 'delivery',
			tone: 'Useful when the frontend role includes ownership, not just tickets.',
		},
	],
	ru: [
		{
			value: '01',
			title: 'Выстраиваю frontend-архитектуру',
			text: 'Выбираю структуру, разделяю фичи, определяю общие слои и удерживаю код читаемым, когда продукт начинает расти.',
			metric: 'structure',
			tone: 'Полезно, когда продукт стартует с нуля или ему нужен порядок после быстрого роста.',
		},
		{
			value: '02',
			title: 'Связываю frontend с backend',
			text: 'Работаю с API-контрактами, DTO-маппингом, слоями запросов, состояниями загрузки и ошибок, а также деталями, которые делают асинхронное поведение предсказуемым.',
			metric: 'contracts',
			tone: 'Полезно, когда frontend и backend должны перестать угадывать ожидания друг друга.',
		},
		{
			value: '03',
			title: 'Разбираю продуктовые правила',
			text: 'Превращаю роли, права доступа, edge cases, формы, кэш и переходы состояния в явное frontend-поведение вместо скрытых багов.',
			metric: 'rules',
			tone: 'Полезно, когда сложная часть не экран, а правила за ним.',
		},
		{
			value: '04',
			title: 'Держу поставку согласованной',
			text: 'Пишу технические требования, уточняю детали с backend и дизайном, проговариваю компромиссы и держу работу связанной с бизнес-целями.',
			metric: 'delivery',
			tone: 'Полезно, когда frontend-роль включает ответственность за результат, а не только выполнение задач.',
		},
	],
};

export const getProcessStepsResponse = (request: Request) =>
	localizedResponse(request, processStepsByLocale);
