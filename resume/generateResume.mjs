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
	'React Query',
	'Zustand',
	'Redux Toolkit',
	'Tailwind CSS',
	'SCSS',
	'Styled Components',
	'GSAP',
	'Vitest',
	'FSD',
];

const resumes = {
	en: {
		fileName: 'iskender-rustambekov-resume-en.html',
		title: 'Iskender Rustambekov - Frontend Engineer Resume',
		name: 'Iskender Rustambekov',
		role: 'Frontend Engineer / React TypeScript Engineer',
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
			'Frontend engineer with 4+ years of commercial experience building web products with React, Next.js and TypeScript. Focused on product logic, API-heavy flows, real-time UI, predictable state and frontend architecture for scalable applications.',
		metrics: [
			['4+', 'years commercial frontend'],
			['8', 'production environments'],
			['E2E', 'frontend ownership'],
		],
		strengths: [
			'Frontend architecture, feature boundaries and shared layers.',
			'Typed API contracts, DTO mapping and async loading/error states.',
			'Complex product rules: roles, permissions, forms, cache and state transitions.',
			'Technical requirements, backend/design alignment and delivery ownership.',
		],
		languages: ['English: B1', 'Russian: native', 'Kyrgyz: native'],
		experience: [
			{
				role: 'Frontend Web Developer',
				company: 'Nomad Games',
				description:
					'Owned frontend delivery at a Bishkek indie startup building a free-to-play web platform for casual multiplayer board and card games inspired by traditional games from different countries. Covered architecture, API requirements, technical tasks, game flows and stable browser behavior.',
				stack: 'React.js, TypeScript, Web games, Multiplayer games',
				meta: ['Sep 2024 - Jan 2026', '1 year 5 months', 'Bishkek, startup'],
			},
			{
				role: 'Frontend Web Developer',
				company: 'DATAxWAY',
				description:
					'Built product interfaces, marketplaces, admin panels and SEO-oriented websites from scratch to production while keeping parallel projects maintainable.',
				stack: 'React.js, TypeScript, Frontend architecture',
				meta: ['Aug 2023 - Jun 2024', '11 months', 'Bishkek, office'],
			},
			{
				role: 'Frontend Web Developer',
				company: 'GetByVerto',
				description:
					'Delivered Next.js product frontend remotely with typed backend contracts, predictable state and disciplined request handling.',
				stack: 'Next.js, TypeScript',
				meta: ['Aug 2022 - Aug 2023', '1 year 1 month', 'Remote'],
			},
			{
				role: 'Frontend Web Developer',
				company: 'Welive Turkish Company',
				description:
					'Implemented frontend features for web products in a fast-moving product environment.',
				stack: 'Next.js, TypeScript',
				meta: ['Jan 2022 - Jul 2022', '7 months', 'Bishkek, office'],
			},
			{
				role: 'Frontend Developer',
				company: 'Budgeting OAPiSR',
				description:
					'Built an internal bank budgeting system with formula logic, tables, branch rules, drag-and-drop and frontend-side auto calculations.',
				stack: 'Budget systems, Bank branch logic',
				meta: ['Oct 2021 - Jan 2022', '4 months', 'Contract, remote'],
			},
		],
		projects: [
			{
				title: 'Casual Multiplayer Games Platform',
				kicker: 'Nomad Games',
				description:
					'Frontend ownership for a free-to-play web platform for casual multiplayer board and card games inspired by traditional games from different countries.',
				stack: 'React, TypeScript, TanStack Query, Zustand, Tailwind',
			},
			{
				title: 'Business Web Systems',
				kicker: 'DATAxWAY',
				description:
					'Marketplaces, service websites and admin panels delivered to production with SEO and backend clarity.',
				stack: 'React, Next.js, TypeScript, React Query, Zustand, Tailwind',
			},
			{
				title: 'Exchange Commerce',
				kicker: 'GetByVerto',
				description:
					'Marketplace flows where users could pay with money or exchange goods, backed by SSR and state discipline.',
				stack: 'Next.js, TypeScript, React Query, Zustand, Tailwind',
			},
			{
				title: 'Admin Commerce',
				kicker: 'Welive Turkish Company',
				description:
					'Marketplace with roles and administration: legacy cleanup, performance fixes and clearer feature boundaries.',
				stack: 'Next.js, TypeScript, Redux Toolkit, SCSS',
			},
		],
		note: 'Resume generated from portfolio content.',
	},
	ru: {
		fileName: 'iskender-rustambekov-resume-ru.html',
		title: 'Искендер Рустамбеков - Frontend Engineer Резюме',
		name: 'Искендер Рустамбеков',
		role: 'Frontend Engineer / React TypeScript Engineer',
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
			'Frontend engineer с 4+ годами коммерческого опыта в разработке веб-продуктов на React, Next.js и TypeScript. Фокус на продуктовой логике, API-нагруженных сценариях, real-time интерфейсах, предсказуемом состоянии и frontend-архитектуре масштабируемых приложений.',
		metrics: [
			['4+', 'года коммерческого frontend-опыта'],
			['8', 'рабочих продуктовых сред'],
			['Фокус', 'ответственность за frontend'],
		],
		strengths: [
			'Frontend-архитектура, границы фич и shared-слои.',
			'Типизированные API-контракты, DTO-маппинг, loading/error состояния.',
			'Сложные продуктовые правила: роли, права, формы, кеш и переходы состояния.',
			'Технические требования, синхронизация с backend/design и ответственность за поставку.',
		],
		languages: ['Английский: B1', 'Русский: родной', 'Кыргызский: родной'],
		experience: [
			{
				role: 'Frontend Web Developer',
				company: 'Nomad Games',
				description:
					'Отвечал за frontend-направление в локальном indie-стартапе из Бишкека, который строил free-to-play веб-платформу для casual multiplayer настольных и карточных игр, вдохновленных традиционными играми разных стран. Покрывал архитектуру, требования к API, технические задачи, игровые сценарии и стабильное поведение в браузере.',
				stack: 'React.js, TypeScript, Web games, Multiplayer games',
				meta: ['Сен 2024 - Янв 2026', '1 год 5 месяцев', 'Bishkek, startup'],
			},
			{
				role: 'Frontend Web Developer',
				company: 'DATAxWAY',
				description:
					'Разрабатывал продуктовые интерфейсы, маркетплейсы, админ-панели и SEO-ориентированные сайты с нуля до продакшена, сохраняя параллельные проекты поддерживаемыми.',
				stack: 'React.js, TypeScript, Frontend architecture',
				meta: ['Авг 2023 - Июн 2024', '11 месяцев', 'Бишкек, офис'],
			},
			{
				role: 'Frontend Web Developer',
				company: 'GetByVerto',
				description:
					'Удаленно поставлял frontend для Next.js-продуктов с типизированными backend-контрактами, предсказуемым состоянием и дисциплинированной работой с запросами.',
				stack: 'Next.js, TypeScript',
				meta: ['Авг 2022 - Авг 2023', '1 год 1 месяц', 'Удаленно'],
			},
			{
				role: 'Frontend Web Developer',
				company: 'Welive Turkish Company',
				description:
					'Разрабатывал frontend-фичи для веб-продуктов в быстрой продуктовой среде.',
				stack: 'Next.js, TypeScript',
				meta: ['Янв 2022 - Июл 2022', '7 месяцев', 'Бишкек, офис'],
			},
			{
				role: 'Frontend Developer',
				company: 'Budgeting OAPiSR',
				description:
					'Создал внутреннюю банковскую систему бюджетирования с логикой формул, таблицами, правилами филиалов, drag-and-drop и автоматическими расчетами на frontend.',
				stack: 'Budget systems, Bank branch logic',
				meta: ['Окт 2021 - Янв 2022', '4 месяца', 'Контракт, удаленно'],
			},
		],
		projects: [
			{
				title: 'Casual Multiplayer Games Platform',
				kicker: 'Nomad Games',
				description:
					'Ответственность за frontend free-to-play веб-платформы casual multiplayer настольных и карточных игр, вдохновленных традиционными играми разных стран.',
				stack: 'React, TypeScript, TanStack Query, Zustand, Tailwind',
			},
			{
				title: 'Business Web Systems',
				kicker: 'DATAxWAY',
				description:
					'Маркетплейсы, сервисные сайты и админ-панели, доведенные до продакшена с учетом SEO и понятной коммуникации с backend.',
				stack: 'React, Next.js, TypeScript, React Query, Zustand, Tailwind',
			},
			{
				title: 'Exchange Commerce',
				kicker: 'GetByVerto',
				description:
					'Сценарии маркетплейса, где пользователи могли платить деньгами или обменивать товары, с SSR и дисциплиной состояния.',
				stack: 'Next.js, TypeScript, React Query, Zustand, Tailwind',
			},
			{
				title: 'Admin Commerce',
				kicker: 'Welive Turkish Company',
				description:
					'Маркетплейс с ролями и администрированием: чистка legacy, performance fixes и более ясные границы фич.',
				stack: 'Next.js, TypeScript, Redux Toolkit, SCSS',
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
