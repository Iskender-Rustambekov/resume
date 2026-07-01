import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = join(process.cwd(), 'public', 'media', 'resume');

const contacts = {
	email: 'merlin.monro.2333@gmail.com',
	telegram: '@sogeking228',
	telegramUrl: 'https://t.me/sogeking228',
	linkedin: 'iskender-rustambekov',
	linkedinUrl: 'https://www.linkedin.com/in/iskender-rustambekov-b3b539237/',
	github: 'Iskender-Rustambekov/resume',
	githubUrl: 'https://github.com/Iskender-Rustambekov/resume',
};

const sharedSkills = [
	'React',
	'Next.js',
	'TypeScript',
	'JavaScript',
	'TanStack Query',
	'Zustand',
	'Redux',
	'Redux Toolkit',
	'Feature-Sliced Design',
	'REST API',
	'WebSockets',
	'OpenAPI',
	'Orval',
	'Tailwind CSS',
	'Material UI',
	'Ant Design',
	'Chakra UI',
	'SCSS',
	'Styled Components',
	'Framer Motion',
	'Jest',
	'Vitest',
	'ESLint',
	'i18n',
];

const resumes = {
	en: {
		fileName: 'iskender-rustambekov-resume-en.html',
		title: 'Iskender Rustambekov - Frontend Developer Resume',
		name: 'Iskender Rustambekov',
		role: 'Frontend Developer / React / Next.js / TypeScript',
		location: 'Bishkek / Remote',
		sections: {
			profile: 'Profile',
			impact: 'Impact',
			coreStack: 'Core Stack',
			strengths: 'Strengths',
			languages: 'Languages',
			experience: 'Experience',
			projects: 'Selected Projects',
		},
		summary:
			'Frontend developer with 4+ years of commercial experience across product web applications, e-commerce, marketplace platforms, admin panels, internal banking systems and real-time products. Strong in React, Next.js, TypeScript, frontend architecture, API integrations and complex interfaces.',
		metrics: [
			['4+', 'years commercial frontend'],
			['5', 'companies'],
			['Remote', 'ready'],
		],
		strengths: [
			'React, Next.js and TypeScript in production product interfaces.',
			'Frontend architecture and decomposition of complex interfaces.',
			'TanStack Query, Zustand and Redux Toolkit for predictable state.',
			'REST API, WebSockets, OpenAPI and Orval integrations.',
			'Complex forms, tables, dashboards and admin panels.',
		],
		languages: ['English: B1', 'Russian: native'],
		experience: [
			{
				role: 'Frontend Developer',
				company: 'NomadGames',
				description:
					'Built the frontend of a free browser multiplayer games platform from scratch: application architecture, UI, state management, API integrations and real-time behavior. Designed reusable managers for sound, vibration, asset loading and screen state, and aligned API contracts with the backend team before new features were implemented.',
				stack:
					'React, TypeScript, Feature-Sliced Design, Zustand, TanStack Query, Centrifugo, WebSockets, REST API, Tailwind CSS',
				meta: [
					'Sep 2024 - Apr 2026',
					'1 year 8 months',
					'Bishkek, product platform',
				],
			},
			{
				role: 'Frontend Developer',
				company: 'DATAxWAY',
				description:
					'Delivered e-commerce products, marketplace platforms, SEO-oriented sites and business admin panels. Implemented SSR, SSG and ISR pages, optimized image and font loading for stronger FCP/LCP, and decomposed monolithic UI modules into reusable UI-kit components.',
				stack:
					'Next.js, React, TypeScript, Feature-Sliced Design, TanStack Query, Zustand, Tailwind CSS, REST API',
				meta: ['Aug 2023 - Jun 2024', '11 months', 'Bishkek, office'],
			},
			{
				role: 'Frontend Developer',
				company: 'GetByVerto',
				description:
					'Developed the frontend for a marketplace with auctions, chats and barter-based deals. Built a typed API layer with Orval, configured TanStack Query caching and invalidation, and extracted repeated marketplace logic into reusable components and modules.',
				stack:
					'Next.js, React, TypeScript, Orval, TanStack Query, Zustand, Tailwind CSS, REST API',
				meta: ['Aug 2022 - Aug 2023', '1 year 1 month', 'Remote'],
			},
			{
				role: 'Frontend Developer',
				company: 'Welive Turkish Company',
				description:
					'Worked on an e-commerce platform for home goods and room fragrance products. Implemented catalog pages, product cards, forms, tables and admin sections, including role-based interfaces for different access levels.',
				stack:
					'Next.js, React, TypeScript, Redux Toolkit, Material UI, SCSS, REST API',
				meta: ['Jan 2022 - Jul 2022', '7 months', 'Bishkek, office'],
			},
			{
				role: 'Frontend Developer',
				company: 'Budgeting OAPiSR',
				description:
					'Built interfaces for an internal banking budgeting system with tables, formulas, calculated data and branch structure. Implemented complex table scenarios, optimized large tables and tree structures, and handled validation errors, slow requests and non-standard UI states.',
				stack: 'React, Next.js, Ant Design, Styled Components, REST API',
				meta: ['Oct 2021 - Jan 2022', '4 months', 'Contract, remote'],
			},
		],
		projects: [
			{
				title: 'Browser Multiplayer Games Platform',
				kicker: 'NomadGames',
				description:
					'Frontend for a free web platform for browser multiplayer games, built from zero around product architecture, UI, state, API contracts and real-time interaction through Centrifugo and WebSockets.',
				stack:
					'React, TypeScript, FSD, Zustand, TanStack Query, Centrifugo, Tailwind',
			},
			{
				title: 'E-commerce, Marketplaces and Admin Panels',
				kicker: 'DATAxWAY',
				description:
					'Business-facing web systems with SEO-oriented Next.js pages, heavy interactive tables, dynamic filters, multi-step forms and reusable UI-kit components extracted from legacy screens.',
				stack:
					'Next.js, React, TypeScript, FSD, TanStack Query, Zustand, Tailwind',
			},
			{
				title: 'Auction and Barter Marketplace',
				kicker: 'GetByVerto',
				description:
					'Marketplace frontend where users could buy goods, offer their own goods in exchange, or combine payment and barter. The work focused on typed contracts, predictable cache updates and reusable marketplace scenarios.',
				stack:
					'Next.js, React, TypeScript, Orval, TanStack Query, Zustand, Tailwind',
			},
			{
				title: 'Home Goods E-commerce',
				kicker: 'Welive Turkish Company',
				description:
					'E-commerce platform for home goods and room fragrance products, including catalog pages, product cards, forms, tables, admin sections and role-based interfaces for different access levels.',
				stack: 'Next.js, React, TypeScript, Redux Toolkit, Material UI, SCSS',
			},
			{
				title: 'Bank Budgeting System',
				kicker: 'Budgeting OAPiSR',
				description:
					'Internal banking budgeting system with tables, formulas, calculated data and branch structure. The frontend handled complex table scenarios, tree structures, validation states and slow request behavior.',
				stack: 'React, Next.js, Ant Design, Styled Components, REST API',
			},
		],
		note: 'Resume generated from portfolio content.',
	},
	ru: {
		fileName: 'iskender-rustambekov-resume-ru.html',
		title: 'Искендер Рустамбеков - Frontend Developer Резюме',
		name: 'Искендер Рустамбеков',
		role: 'Frontend Developer / React / Next.js / TypeScript',
		location: 'Бишкек / Удаленно',
		sections: {
			profile: 'Профиль',
			impact: 'Фокус',
			coreStack: 'Стек',
			strengths: 'Сильные стороны',
			languages: 'Языки',
			experience: 'Опыт',
			projects: 'Проекты',
		},
		summary:
			'Frontend-разработчик с 4+ годами коммерческого опыта в продуктовых веб-приложениях, e-commerce, marketplace-платформах, админ-панелях, внутренних банковских системах и real-time продуктах. Сильные стороны: React, Next.js, TypeScript, frontend-архитектура, API-интеграции и сложные интерфейсы.',
		metrics: [
			['4+', 'года коммерческого frontend-опыта'],
			['5', 'компаний'],
			['Remote', 'готов к удаленной работе'],
		],
		strengths: [
			'React, Next.js и TypeScript в продуктовых интерфейсах.',
			'Frontend-архитектура и декомпозиция сложных интерфейсов.',
			'TanStack Query, Zustand и Redux Toolkit для предсказуемого состояния.',
			'REST API, WebSockets, OpenAPI и Orval-интеграции.',
			'Сложные формы, таблицы, дашборды и админ-панели.',
		],
		languages: ['Английский: B1', 'Русский: родной'],
		experience: [
			{
				role: 'Frontend-разработчик',
				company: 'NomadGames',
				description:
					'Разрабатывал frontend веб-платформы для бесплатных браузерных multiplayer-игр с нуля: архитектуру приложения, UI, управление состоянием, API-интеграции и real-time взаимодействие. Реализовывал переиспользуемые менеджеры звука, вибраций, загрузки ассетов и состояния экрана, а также заранее прорабатывал API-контракты с backend-командой.',
				stack:
					'React, TypeScript, Feature-Sliced Design, Zustand, TanStack Query, Centrifugo, WebSockets, REST API, Tailwind CSS',
				meta: [
					'Сентябрь 2024 - апрель 2026',
					'1 год 8 месяцев',
					'Бишкек, продуктовая платформа',
				],
			},
			{
				role: 'Frontend-разработчик',
				company: 'DATAxWAY',
				description:
					'Работал над e-commerce, marketplace-платформами, SEO-ориентированными сайтами и административными панелями для бизнеса. Реализовывал SSR/SSG/ISR-страницы на Next.js, оптимизировал загрузку изображений и шрифтов для FCP/LCP, декомпозировал монолитные UI-модули в переиспользуемые UI-kit компоненты.',
				stack:
					'Next.js, React, TypeScript, Feature-Sliced Design, TanStack Query, Zustand, Tailwind CSS, REST API',
				meta: ['Август 2023 - июнь 2024', '11 месяцев', 'Бишкек, офис'],
			},
			{
				role: 'Frontend-разработчик',
				company: 'GetByVerto',
				description:
					'Разрабатывал frontend marketplace-платформы с аукционами, чатами и бартерной моделью сделок. Реализовал типизированный API-слой через Orval, настроил кэширование и инвалидацию данных через TanStack Query, выносил повторяющуюся marketplace-логику в переиспользуемые компоненты и модули.',
				stack:
					'Next.js, React, TypeScript, Orval, TanStack Query, Zustand, Tailwind CSS, REST API',
				meta: ['Август 2022 - август 2023', '1 год 1 месяц', 'Удаленно'],
			},
			{
				role: 'Frontend-разработчик',
				company: 'Welive Turkish Company',
				description:
					'Работал над e-commerce платформой для продажи товаров для дома и ароматизации помещений. Реализовывал страницы каталога, карточки товаров, формы, таблицы и административные разделы, включая интерфейсы для разных уровней доступа.',
				stack:
					'Next.js, React, TypeScript, Redux Toolkit, Material UI, SCSS, REST API',
				meta: ['Январь 2022 - июль 2022', '7 месяцев', 'Бишкек, офис'],
			},
			{
				role: 'Frontend-разработчик',
				company: 'Budgeting OAPiSR',
				description:
					'Разрабатывал интерфейсы для внутренней банковской системы бюджетирования с таблицами, формулами, расчетными данными и филиальной структурой. Реализовывал сложные табличные сценарии, оптимизировал большие таблицы и древовидные структуры, обрабатывал ошибки валидации, медленные запросы и нестандартные состояния интерфейса.',
				stack: 'React, Next.js, Ant Design, Styled Components, REST API',
				meta: ['Октябрь 2021 - январь 2022', '4 месяца', 'Контракт, удаленно'],
			},
		],
		projects: [
			{
				title: 'Платформа браузерных multiplayer-игр',
				kicker: 'NomadGames',
				description:
					'Frontend бесплатной веб-платформы для браузерных multiplayer-игр, построенный с нуля вокруг архитектуры приложения, UI, состояния, API-контрактов и real-time взаимодействия через Centrifugo и WebSockets.',
				stack:
					'React, TypeScript, FSD, Zustand, TanStack Query, Centrifugo, Tailwind',
			},
			{
				title: 'E-commerce, marketplace и админ-панели',
				kicker: 'DATAxWAY',
				description:
					'Веб-системы для бизнеса: SEO-ориентированные страницы на Next.js, тяжелые интерактивные таблицы, динамическая фильтрация, многошаговые формы и UI-kit компоненты, вынесенные из legacy-экранов.',
				stack:
					'Next.js, React, TypeScript, FSD, TanStack Query, Zustand, Tailwind',
			},
			{
				title: 'Marketplace с аукционами и бартером',
				kicker: 'GetByVerto',
				description:
					'Frontend marketplace-платформы, где пользователи могли покупать товары за деньги, предлагать свои товары в обмен или комбинировать оплату и бартер. Работа была сфокусирована на типизированных контрактах, предсказуемом обновлении кэша и переиспользуемых marketplace-сценариях.',
				stack:
					'Next.js, React, TypeScript, Orval, TanStack Query, Zustand, Tailwind',
			},
			{
				title: 'E-commerce для товаров для дома',
				kicker: 'Welive Turkish Company',
				description:
					'Платформа для продажи товаров для дома и ароматизации помещений: страницы каталога, карточки товаров, формы, таблицы, административные разделы и интерфейсы для разных уровней доступа.',
				stack: 'Next.js, React, TypeScript, Redux Toolkit, Material UI, SCSS',
			},
			{
				title: 'Банковская система бюджетирования',
				kicker: 'Budgeting OAPiSR',
				description:
					'Внутренняя банковская система бюджетирования с таблицами, формулами, расчетными данными и филиальной структурой. Frontend покрывал сложные табличные сценарии, древовидные структуры, состояния валидации и поведение при медленных запросах.',
				stack: 'React, Next.js, Ant Design, Styled Components, REST API',
			},
		],
		note: 'Резюме собрано на основе данных портфолио.',
	},
};

const css = `
@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
body {
	margin: 0;
	background: #ffffff;
	color: #121722;
	font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
	font-size: 9.35px;
	line-height: 1.36;
}
a { color: inherit; text-decoration: none; }
.page {
	position: relative;
	width: 210mm;
	min-height: 297mm;
	margin: 0 auto;
	overflow: hidden;
	background: #fbfcff;
}
.page::before {
	position: absolute;
	inset: 0 0 auto;
	height: 6.5mm;
	background: linear-gradient(90deg, #121722, #2557d6 44%, #10a37f 100%);
	content: "";
}
.content {
	position: relative;
	z-index: 1;
	display: grid;
	grid-template-columns: 61mm 1fr;
	gap: 7mm;
	padding: 14mm 11mm 10mm;
}
.header {
	grid-column: 1 / -1;
	display: grid;
	grid-template-columns: 1fr 72mm;
	gap: 10mm;
	align-items: end;
	padding-bottom: 5mm;
	border-bottom: 1px solid rgba(18, 23, 34, 0.16);
}
.name {
	margin: 0;
	font-size: 30px;
	line-height: 0.96;
	letter-spacing: 0;
	color: #0e1320;
}
.role {
	margin: 3mm 0 0;
	color: #2557d6;
	font-size: 12px;
	font-weight: 800;
	letter-spacing: 0;
	text-transform: uppercase;
}
.summary { margin: 0; color: #3b4658; font-size: 10px; }
.contact {
	display: grid;
	gap: 1.4mm;
	color: #30394a;
	font-size: 8.6px;
	text-align: right;
}
.contact strong { color: #121722; font-weight: 800; }
.sidebar, .main { display: grid; align-content: start; gap: 4.2mm; }
.section { break-inside: avoid; }
.section-title {
	display: flex;
	align-items: center;
	gap: 2.2mm;
	margin: 0 0 2.4mm;
	color: #101624;
	font-size: 10px;
	font-weight: 900;
	letter-spacing: 0.08em;
	text-transform: uppercase;
}
.section-title::before {
	width: 4.4mm;
	height: 1.5mm;
	background: #2557d6;
	content: "";
}
.panel {
	padding: 3.2mm;
	border: 1px solid rgba(18, 23, 34, 0.12);
	background: #ffffff;
}
.skills { display: flex; flex-wrap: wrap; gap: 1.2mm; }
.skill {
	padding: 1mm 1.8mm;
	border: 1px solid rgba(37, 87, 214, 0.2);
	background: #eef3ff;
	color: #172544;
	font-size: 8.45px;
	font-weight: 700;
}
.metric-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2mm; }
.metric { padding: 2.4mm; background: #121722; color: #ffffff; }
.metric b { display: block; font-size: 13px; }
.metric span { color: rgba(255, 255, 255, 0.72); font-size: 7.9px; }
.list { display: grid; gap: 1.7mm; margin: 0; padding: 0; list-style: none; }
.list li { position: relative; padding-left: 3.3mm; color: #374255; }
.list li::before {
	position: absolute;
	top: 1.55mm;
	left: 0;
	width: 1.35mm;
	height: 1.35mm;
	background: #10a37f;
	content: "";
}
.job {
	display: grid;
	grid-template-columns: 1fr 34mm;
	gap: 3mm;
	padding-bottom: 3mm;
	border-bottom: 1px solid rgba(18, 23, 34, 0.1);
	break-inside: avoid;
}
.job:last-child { padding-bottom: 0; border-bottom: 0; }
.job h3, .project h3 { margin: 0; color: #111725; font-size: 10.8px; line-height: 1.12; }
.job .company, .project .kicker {
	margin-top: 0.7mm;
	color: #2557d6;
	font-weight: 800;
	font-size: 8.6px;
}
.job p, .project p { margin: 1.4mm 0 0; color: #3b4658; }
.meta { color: #536070; font-size: 8.2px; text-align: right; }
.stack-line { margin-top: 1.3mm; color: #5b6474; font-size: 8.05px; font-weight: 700; }
.projects { display: grid; grid-template-columns: 1fr 1fr; gap: 2.4mm; }
.project {
	padding: 2.8mm;
	border-left: 1.5mm solid #2557d6;
	background: #ffffff;
	break-inside: avoid;
}
.project:nth-child(2), .project:nth-child(4) { border-color: #10a37f; }
.footer-note { color: #5b6474; font-size: 7.8px; }
@media print {
	body { background: #ffffff; }
}
`;

const html = (resume) => `<!doctype html>
<html lang="${resume === resumes.ru ? 'ru' : 'en'}">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>${resume.title}</title>
		<style>${css}</style>
	</head>
	<body>
		<main class="page">
			<div class="content">
				<header class="header">
					<div>
						<h1 class="name">${resume.name}</h1>
						<p class="role">${resume.role}</p>
					</div>
					<div class="contact" aria-label="Contact links">
						<a href="mailto:${contacts.email}"><strong>Email</strong> ${contacts.email}</a>
						<a href="${contacts.telegramUrl}"><strong>Telegram</strong> ${contacts.telegram}</a>
						<a href="${contacts.linkedinUrl}"><strong>LinkedIn</strong> ${contacts.linkedin}</a>
						<a href="${contacts.githubUrl}"><strong>GitHub</strong> ${contacts.github}</a>
						<span><strong>${resume === resumes.ru ? 'Локация' : 'Location'}</strong> ${resume.location}</span>
					</div>
				</header>
				<aside class="sidebar">
					<section class="section panel">
						<h2 class="section-title">${resume.sections.profile}</h2>
						<p class="summary">${resume.summary}</p>
					</section>
					<section class="section panel">
						<h2 class="section-title">${resume.sections.impact}</h2>
						<div class="metric-grid">${resume.metrics.map(([value, label]) => `<div class="metric"><b>${value}</b><span>${label}</span></div>`).join('')}</div>
					</section>
					<section class="section panel">
						<h2 class="section-title">${resume.sections.coreStack}</h2>
						<div class="skills">${sharedSkills.map((skill) => `<span class="skill">${skill}</span>`).join('')}</div>
					</section>
					<section class="section panel">
						<h2 class="section-title">${resume.sections.strengths}</h2>
						<ul class="list">${resume.strengths.map((item) => `<li>${item}</li>`).join('')}</ul>
					</section>
					<section class="section panel">
						<h2 class="section-title">${resume.sections.languages}</h2>
						<ul class="list">${resume.languages.map((item) => `<li>${item}</li>`).join('')}</ul>
					</section>
				</aside>
				<section class="main">
					<section class="section panel">
						<h2 class="section-title">${resume.sections.experience}</h2>
						${resume.experience
							.map(
								(job) => `<div class="job">
									<div>
										<h3>${job.role}</h3>
										<div class="company">${job.company}</div>
										<p>${job.description}</p>
										<div class="stack-line">${job.stack}</div>
									</div>
									<div class="meta">${job.meta.join('<br />')}</div>
								</div>`,
							)
							.join('')}
					</section>
					<section class="section">
						<h2 class="section-title">${resume.sections.projects}</h2>
						<div class="projects">
							${resume.projects
								.map(
									(project) => `<article class="project">
										<h3>${project.title}</h3>
										<div class="kicker">${project.kicker}</div>
										<p>${project.description}</p>
										<div class="stack-line">${project.stack}</div>
									</article>`,
								)
								.join('')}
						</div>
					</section>
					<p class="footer-note">${resume.note}</p>
				</section>
			</div>
		</main>
	</body>
</html>`;

mkdirSync(outputDir, { recursive: true });

for (const resume of Object.values(resumes)) {
	writeFileSync(join(outputDir, resume.fileName), html(resume), 'utf8');
}
