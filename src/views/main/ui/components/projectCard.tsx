import styles from '../main-page.module.css';

import type { Project } from '../../model';

type ProjectCardProps = {
	project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const glowClassName = projectGlowClassNames[project.accent];

	return (
		<article className="group relative flex h-[62vh] min-h-120 w-[min(82vw,620px)] flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-card/75 p-7 shadow-2xl backdrop-blur-xl max-md:w-[calc(100vw-2.5rem)] max-md:min-h-107.5">
			<div
				className={`${styles.projectGlow} ${glowClassName} absolute inset-x-8 top-8 h-56 rounded-full blur-3xl transition group-hover:scale-110`}
			/>
			<div className={`${styles.speedLines} absolute inset-0 opacity-25`} />
			<div className="relative">
				<p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
					{project.kicker}
				</p>
				<h3 className="mt-5 max-w-lg text-5xl font-semibold leading-none sm:text-7xl">
					{project.title}
				</h3>
			</div>
			<div className="relative">
				<p className="max-w-md text-lg leading-8 text-muted-foreground">
					{project.description}
				</p>
				<div className="mt-6 flex flex-wrap gap-2">
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
