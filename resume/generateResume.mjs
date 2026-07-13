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

		note: '',
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
		note: '',
	},
};

const css = `
@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
body {
	margin: 0;
	background: #eef2f8;
	color: #162032;
	font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
	font-size: 9.15px;
	line-height: 1.38;
}
a { color: inherit; text-decoration: none; }
.page {
	position: relative;
	width: 210mm;
	min-height: 297mm;
	margin: 0 auto;
	overflow: hidden;
	background: #f8fafc;
}
.page::before {
	position: absolute;
	inset: 0 0 auto;
	height: 9mm;
	background: linear-gradient(90deg, #0f172a 0%, #1d4ed8 52%, #0f766e 100%);
	content: "";
}
.content {
	position: relative;
	z-index: 1;
	display: grid;
	grid-template-columns: 63mm minmax(0, 1fr);
	gap: 6mm;
	padding: 13mm 10mm 9mm;
}
.header {
	grid-column: 1 / -1;
	display: grid;
	grid-template-columns: minmax(0, 1fr) 73mm;
	gap: 8mm;
	align-items: center;
	padding: 7mm;
	border: 1px solid rgba(15, 23, 42, 0.1);
	border-radius: 5mm;
	background: #ffffff;
	box-shadow: 0 3mm 10mm rgba(15, 23, 42, 0.08);
}
.name {
	margin: 0;
	font-size: 31px;
	line-height: 0.94;
	letter-spacing: 0;
	color: #0f172a;
}
.role {
	margin: 2.6mm 0 0;
	color: #1d4ed8;
	font-size: 11.3px;
	font-weight: 800;
	letter-spacing: 0;
	text-transform: uppercase;
}
.summary { margin: 0; color: #334155; font-size: 9.75px; }
.contact {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	gap: 1.35mm;
	color: #334155;
	font-size: 8.15px;
}
.contact a, .contact span {
	padding: 1.1mm 1.7mm;
	border: 1px solid rgba(29, 78, 216, 0.16);
	border-radius: 99px;
	background: #f8fafc;
	white-space: nowrap;
}
.contact strong { color: #0f172a; font-weight: 800; }
.sidebar, .main { display: grid; align-content: start; gap: 3.4mm; }
.section { break-inside: avoid; }
.section-title {
	display: flex;
	align-items: center;
	gap: 1.8mm;
	margin: 0 0 2.1mm;
	color: #0f172a;
	font-size: 9.35px;
	font-weight: 900;
	letter-spacing: 0.08em;
	text-transform: uppercase;
}
.section-title::before {
	width: 4mm;
	height: 1.25mm;
	border-radius: 99px;
	background: #1d4ed8;
	content: "";
}
.panel {
	padding: 3mm;
	border: 1px solid rgba(15, 23, 42, 0.1);
	border-radius: 3mm;
	background: #ffffff;
}
.skills { display: flex; flex-wrap: wrap; gap: 1mm; }
.skill {
	padding: 0.9mm 1.45mm;
	border: 1px solid rgba(29, 78, 216, 0.16);
	border-radius: 99px;
	background: #eff6ff;
	color: #1e3a8a;
	font-size: 7.75px;
	font-weight: 700;
}
.metric-grid { display: grid; gap: 1.7mm; }
.metric {
	padding: 2.35mm;
	border-radius: 2.4mm;
	background: linear-gradient(135deg, #0f172a, #1d4ed8);
	color: #ffffff;
}
.metric b { display: block; font-size: 13px; }
.metric span { color: rgba(255, 255, 255, 0.72); font-size: 7.9px; }
.list { display: grid; gap: 1.55mm; margin: 0; padding: 0; list-style: none; }
.list li { position: relative; padding-left: 3.1mm; color: #334155; }
.list li::before {
	position: absolute;
	top: 1.45mm;
	left: 0;
	width: 1.25mm;
	height: 1.25mm;
	border-radius: 50%;
	background: #0f766e;
	content: "";
}
.job {
	display: grid;
	grid-template-columns: minmax(0, 1fr) 35mm;
	gap: 3.2mm;
	padding: 3mm;
	border: 1px solid rgba(15, 23, 42, 0.1);
	border-left: 1.6mm solid #1d4ed8;
	border-radius: 3mm;
	background: #ffffff;
	break-inside: avoid;
}
.job h3 { margin: 0; color: #0f172a; font-size: 10.8px; line-height: 1.12; }
.job .company {
	margin-top: 0.7mm;
	color: #1d4ed8;
	font-weight: 800;
	font-size: 8.6px;
}
.job p { margin: 1.4mm 0 0; color: #334155; }
.meta {
	color: #475569;
	font-size: 7.95px;
	line-height: 1.5;
	text-align: right;
}
.stack-line {
	margin-top: 1.4mm;
	color: #0f766e;
	font-size: 7.85px;
	font-weight: 800;
}
.footer-note { color: #64748b; font-size: 7.8px; }
@media print {
	body { background: #ffffff; }
	.page { margin: 0; }
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
