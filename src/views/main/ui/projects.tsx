import { ArrowUpRightIcon } from '@phosphor-icons/react';

import { Section } from '@/shared/ui/components';

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

export const ProjectsSection = () => {
	return (
		<Section title="Projects">
			<div className="grid gap-4 md:grid-cols-2">
				{projects.map((project) => (
					<article
						key={project.title}
						className="border border-border bg-card p-5 text-card-foreground"
					>
						<div className="flex items-start justify-between gap-4">
							<h3 className="text-lg font-semibold">{project.title}</h3>
							<ArrowUpRightIcon className="mt-1 size-4" weight="bold" />
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
	);
};
