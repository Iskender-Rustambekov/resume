import {
	ArrowUpRight,
	EnvelopeSimple,
	GithubLogo,
	MapPin,
} from '@phosphor-icons/react/dist/ssr';

import { Section } from '@/shared/ui/components';
import { Button } from '@/shared/ui/shadcn/ui/button';

const contacts = [
	{ label: 'Bishkek, Kyrgyzstan', icon: MapPin },
	{ label: 'frontend@example.com', icon: EnvelopeSimple },
	{ label: 'github.com/username', icon: GithubLogo },
];

const skills = [
	'React',
	'Next.js',
	'TypeScript',
	'Tailwind CSS',
	'Redux Toolkit',
	'React Query',
	'FSD',
	'REST API',
];

const projects = [
	{
		title: 'Dashboard for Analytics',
		description:
			'Responsive interface with charts, filters, data tables and reusable UI primitives.',
		stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
	},
	{
		title: 'E-commerce Admin',
		description:
			'Product management flows, form validation, role-based views and clean page composition.',
		stack: ['React', 'Redux Toolkit', 'Radix UI'],
	},
];

const experience = [
	{
		role: 'Frontend Developer',
		company: 'Company Name',
		period: '2024 - Present',
		description:
			'Building production interfaces, improving component systems and collaborating with product teams.',
	},
	{
		role: 'Junior Frontend Developer',
		company: 'Previous Company',
		period: '2022 - 2024',
		description:
			'Implemented landing pages, internal tools and integrations with backend APIs.',
	},
];

export function ResumePage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="mx-auto flex w-full max-w-5xl flex-col px-5 py-8 sm:px-8 lg:px-10">
				<header className="flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
					<div className="max-w-2xl">
						<p className="mb-4 text-sm font-medium text-muted-foreground">
							Frontend Developer
						</p>
						<h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
							Your Name
						</h1>
						<p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
							I build fast, accessible and maintainable web interfaces with
							React, Next.js and TypeScript. This page is a starter resume shell
							ready for real content.
						</p>
					</div>

					<div className="flex flex-wrap gap-2">
						<Button asChild>
							<a href="mailto:frontend@example.com">
								<EnvelopeSimple weight="bold" />
								Contact
							</a>
						</Button>
						<Button variant="outline" asChild>
							<a href="https://github.com/username" target="_blank">
								<GithubLogo weight="bold" />
								GitHub
							</a>
						</Button>
					</div>
				</header>

				<section className="grid gap-3 border-y border-border py-5 sm:grid-cols-3">
					{contacts.map((contact) => {
						const Icon = contact.icon;

						return (
							<div
								key={contact.label}
								className="flex min-h-10 items-center gap-2 text-sm text-muted-foreground"
							>
								<Icon className="size-4 text-foreground" weight="bold" />
								<span>{contact.label}</span>
							</div>
						);
					})}
				</section>

				<Section title="Skills">
					<div className="flex flex-wrap gap-2">
						{skills.map((skill) => (
							<span
								key={skill}
								className="border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
							>
								{skill}
							</span>
						))}
					</div>
				</Section>

				<Section title="Experience">
					<div className="grid gap-6">
						{experience.map((item) => (
							<article
								key={`${item.role}-${item.company}`}
								className="grid gap-3 md:grid-cols-[180px_1fr]"
							>
								<p className="text-sm text-muted-foreground">{item.period}</p>
								<div>
									<h3 className="text-lg font-semibold">{item.role}</h3>
									<p className="mt-1 text-sm text-muted-foreground">
										{item.company}
									</p>
									<p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
										{item.description}
									</p>
								</div>
							</article>
						))}
					</div>
				</Section>

				<Section title="Projects">
					<div className="grid gap-4 md:grid-cols-2">
						{projects.map((project) => (
							<article
								key={project.title}
								className="border border-border bg-card p-5 text-card-foreground"
							>
								<div className="flex items-start justify-between gap-4">
									<h3 className="text-lg font-semibold">{project.title}</h3>
									<ArrowUpRight className="mt-1 size-4" weight="bold" />
								</div>
								<p className="mt-3 min-h-20 leading-7 text-muted-foreground">
									{project.description}
								</p>
								<div className="mt-5 flex flex-wrap gap-2">
									{project.stack.map((item) => (
										<span
											key={item}
											className="bg-muted px-2 py-1 text-xs text-muted-foreground"
										>
											{item}
										</span>
									))}
								</div>
							</article>
						))}
					</div>
				</Section>

				<Section title="Education">
					<div className="grid gap-3 md:grid-cols-[180px_1fr]">
						<p className="text-sm text-muted-foreground">2020 - 2024</p>
						<div>
							<h3 className="text-lg font-semibold">Computer Science</h3>
							<p className="mt-2 leading-7 text-muted-foreground">
								University or course name. Replace this block with your real
								education, certificates or mentoring experience.
							</p>
						</div>
					</div>
				</Section>
			</div>
		</main>
	);
}
