type MainPageLocale = 'en' | 'ru';

type ProcessStep = {
	value: string;
	title: string;
	text: string;
	metric: string;
	tone: string;
};

type Project = {
	kicker: string;
	title: string;
	description: string;
	facts: string[];
	stack: string[];
	accent: 'primary' | 'secondary' | 'accent';
};

type ExperienceItem = {
	role: string;
	company: string;
	employmentType: string;
	period: string;
	duration: string;
	location: string;
	mode: string;
	stack: string[];
	description: string;
};

type ContactLinks = {
	email: string;
	github: string;
	linkedin: string;
	telegram: string;
	resume: string;
};

const DEFAULT_LOCALE: MainPageLocale = 'en';
const SUPPORTED_LOCALES: MainPageLocale[] = ['en', 'ru'];

const projectsByLocale: Record<MainPageLocale, Project[]> = {
	en: [
		{
			kicker: 'Confidential game product',
			title: 'Arcade Launcher',
			description:
				'Started a real-time multiplayer arcade game launcher from scratch as frontend team lead: architecture, API requirements, technical tasks, launcher/game-module flows and stable browser behavior.',
			facts: ['Team lead', 'From zero', 'Realtime product'],
			stack: [
				'React',
				'TypeScript',
				'TanStack Query',
				'Zustand',
				'Centrifugo',
				'Tailwind',
			],
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
			kicker: 'Конфиденциальный игровой продукт',
			title: 'Arcade Launcher',
			description:
				'Запускал real-time multiplayer launcher для arcade-игр с нуля как frontend team lead: архитектура, API requirements, технические задачи, связи launcher/game-module и стабильное поведение в браузере.',
			facts: ['Team lead', 'С нуля', 'Realtime-продукт'],
			stack: [
				'React',
				'TypeScript',
				'TanStack Query',
				'Zustand',
				'Centrifugo',
				'Tailwind',
			],
			accent: 'primary',
		},
		{
			kicker: 'Аутсорс-доставка',
			title: 'Business Web Systems',
			description:
				'Доводил marketplaces, service websites и admin panels с нуля до production, удерживая параллельные проекты поддерживаемыми, SEO-oriented и понятными по backend-коммуникации.',
			facts: ['2+ проекта параллельно', 'Production delivery', 'SEO-oriented'],
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
				'Строил frontend flows для нестандартного маркетплейса, где пользователи могли платить деньгами или обменивать товары, с быстрым SSR, предсказуемым state и дисциплиной request handling.',
			facts: ['Бартерная логика', 'Оптимизированный SSR', 'State discipline'],
			stack: ['Next.js', 'TypeScript', 'React Query', 'Zustand', 'Tailwind'],
			accent: 'accent',
		},
		{
			kicker: 'Маркетплейс и админка',
			title: 'Admin Commerce',
			description:
				'Улучшал маркетплейс с ролями и администрированием: legacy cleanup, performance fixes, admin surfaces и более понятные feature boundaries в команде из двух frontend-разработчиков.',
			facts: ['Admin panel', 'Legacy cleanup', '2 frontend devs'],
			stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'SCSS'],
			accent: 'primary',
		},
		{
			kicker: 'Внутренний банковский инструмент',
			title: 'Branch Budgeting',
			description:
				'Строил внутренний банковский budgeting tool в формате умной таблицы: tables, formulas, drag-and-drop, branch rules и frontend-side auto calculations.',
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
};

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
			title: 'Выстраиваю frontend architecture',
			text: 'Выбираю структуру, разделяю features, определяю shared layers и удерживаю код читаемым, когда продукт начинает расти.',
			metric: 'structure',
			tone: 'Полезно, когда продукт стартует с нуля или ему нужен порядок после быстрого роста.',
		},
		{
			value: '02',
			title: 'Связываю frontend с backend',
			text: 'Работаю с API contracts, DTO mapping, request layers, loading/error states и деталями, которые делают async behavior предсказуемым.',
			metric: 'contracts',
			tone: 'Полезно, когда frontend и backend должны перестать угадывать ожидания друг друга.',
		},
		{
			value: '03',
			title: 'Разбираю product rules',
			text: 'Превращаю roles, permissions, edge cases, forms, cache и state transitions в явное frontend-поведение вместо скрытых багов.',
			metric: 'rules',
			tone: 'Полезно, когда сложная часть не экран, а правила за ним.',
		},
		{
			value: '04',
			title: 'Держу delivery aligned',
			text: 'Пишу technical requirements, уточняю детали с backend/design, проговариваю tradeoffs и держу работу связанной с business goals.',
			metric: 'delivery',
			tone: 'Полезно, когда frontend role включает ownership, а не только выполнение tickets.',
		},
	],
};

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
			company: 'Confidential company',
			employmentType: 'Confidential',
			period: 'Sep 2024 - Jan 2026',
			duration: '1 year 5 months',
			location: 'Confidential',
			mode: 'Product work',
			stack: ['React.js', 'TypeScript', 'Game launcher', 'Arcade games'],
			description:
				'Frontend team lead для real-time game launcher, построенного с нуля.',
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
				'Product interfaces, marketplaces, admin panels и SEO-oriented websites.',
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
				'Remote frontend delivery для Next.js products с typed backend contracts.',
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
				'Frontend features для web products в fast-moving company environment.',
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
				'Internal banking budgeting system с formula logic и table interactions.',
		},
	],
};

const contactLinksByLocale: Record<MainPageLocale, ContactLinks> = {
	en: {
		email: 'mailto:your.email@example.com',
		github: 'https://github.com/your-username',
		linkedin: 'https://www.linkedin.com/in/your-username',
		telegram: 'https://t.me/your_username',
		resume: '#',
	},
	ru: {
		email: 'mailto:your.email@example.com',
		github: 'https://github.com/your-username',
		linkedin: 'https://www.linkedin.com/in/your-username',
		telegram: 'https://t.me/your_username',
		resume: '#',
	},
};

const getLocaleFromAcceptLanguage = (
	acceptLanguage?: string | null,
): MainPageLocale => {
	if (!acceptLanguage) {
		return DEFAULT_LOCALE;
	}

	const languages = acceptLanguage
		.split(',')
		.map((language) => language.trim().split(';')[0]?.toLowerCase())
		.filter(Boolean);

	for (const language of languages) {
		const locale = language.split('-')[0] as MainPageLocale;

		if (SUPPORTED_LOCALES.includes(locale)) {
			return locale;
		}
	}

	return DEFAULT_LOCALE;
};

const localizedResponse = <T>(
	request: Request,
	dataByLocale: Record<MainPageLocale, T>,
) => {
	const locale = getLocaleFromAcceptLanguage(
		request.headers.get('accept-language'),
	);

	return Response.json(dataByLocale[locale], {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Content-Language': locale,
			Vary: 'Accept-Language',
		},
	});
};

export const getProjectsResponse = (request: Request) =>
	localizedResponse(request, projectsByLocale);

export const getProcessStepsResponse = (request: Request) =>
	localizedResponse(request, processStepsByLocale);

export const getWorkExperienceResponse = (request: Request) =>
	localizedResponse(request, workExperienceByLocale);

export const getContactLinksResponse = (request: Request) =>
	localizedResponse(request, contactLinksByLocale);
