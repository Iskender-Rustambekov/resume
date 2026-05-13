import styles from '../main-page.module.css';

import type { Project } from '../../model';

type ProjectCardProps = {
	project: Project;
	variant?: 'featured' | 'compact';
};

export const ProjectCard = ({
	project,
	variant = 'compact',
}: ProjectCardProps) => {
	const glowClassName = projectGlowClassNames[project.accent];
	const isFeatured = variant === 'featured';

	return (
		<article
			data-motion="project-card"
			className={`group relative flex min-h-125 flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-card/75 p-7 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card ${
				isFeatured ? 'lg:min-h-150 lg:p-9' : ''
			}`}
		>
			<div
				className={`${styles.projectGlow} ${glowClassName} absolute inset-x-8 top-8 h-56 rounded-full transition group-hover:scale-110`}
			/>
			<div className={`${styles.speedLines} absolute inset-0 opacity-25`} />
			<div className="relative">
				<p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
					{project.kicker}
				</p>
				<h3
					className={`mt-5 max-w-lg font-semibold leading-none ${
						isFeatured ? 'text-5xl sm:text-7xl' : 'text-4xl sm:text-5xl'
					}`}
				>
					{project.title}
				</h3>
			</div>
			<div className="relative grid gap-5">
				<div className="flex flex-wrap gap-2">
					{project.facts.map((fact) => (
						<span
							key={fact}
							className="rounded-xl border border-border bg-background/55 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
						>
							{fact}
						</span>
					))}
				</div>

				<p
					className={`max-w-2xl leading-8 text-muted-foreground ${
						isFeatured ? 'text-lg sm:text-xl' : 'text-base'
					}`}
				>
					{project.description}
				</p>
				<div className="flex flex-wrap gap-2">
					{project.stack.map((item) => (
						<span
							key={item}
							className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm"
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</article>
	);
};

const projectGlowClassNames: Record<Project['accent'], string> = {
	accent: styles.projectGlowAccent,
	primary: styles.projectGlowPrimary,
	secondary: styles.projectGlowSecondary,
};
