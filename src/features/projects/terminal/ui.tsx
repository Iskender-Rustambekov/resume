'use client';

import { useMemo, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getMainPageProjects } from '@/shared/api/generated/portfolio/endpoints/main-page/main-page';
import { type Project } from '@/shared/api/generated/portfolio/types';
import { cn } from '@/shared/utils/cn/util';

import {
	ProjectCommand,
	ProjectDetails,
	ProjectSummary,
	TerminalCommand,
	TerminalHeader,
	TerminalLine,
	type TTerminalLine,
} from './components';

import styles from './styles.module.css';

export const ProjectTerminal = () => {
	const { data: projects = [] } = useQuery({
		queryKey: ['serverGetMainPageProjects'],
		queryFn: getMainPageProjects,
	});

	const [activeProjectIndex, setActiveProjectIndex] = useState(0);
	const activeProject = projects[activeProjectIndex];

	const terminalLines = useMemo(
		() => getTerminalLines(activeProject, activeProjectIndex, projects.length),
		[activeProject, activeProjectIndex, projects.length],
	);

	return (
		<div
			data-motion="reveal"
			className={cn(
				styles.terminalShell,
				'relative overflow-hidden rounded-[1.25rem] border border-primary bg-secondary-foreground font-mono text-white shadow-2xl shadow-black/40 ring-1 ring-primary/30',
			)}
		>
			<TerminalHeader />
			<div className="relative z-1 grid min-h-172 lg:grid-cols-[20rem_1fr]">
				{/* ============== Sidebar ============== */}
				<aside className="grid content-start border-b border-primary/25 bg-secondary-foreground p-4 lg:border-r lg:border-b-0">
					<p className="text-[0.78rem] opacity-80">Available commands</p>

					<div className="mt-4 grid gap-2">
						{projects.map((project, index) => (
							<ProjectCommand
								key={project.title}
								commandSlug={toCommandSlug(project.title)}
								isActive={index === activeProjectIndex}
								onSelect={() => setActiveProjectIndex(index)}
							/>
						))}
					</div>
				</aside>

				{/* ============== Content ============== */}
				<div className="relative overflow-hidden bg-secondary-foreground p-5 text-white">
					<div
						key={activeProject.title}
						className="relative z-2 grid min-h-152 content-start gap-[1.1rem]"
					>
						<TerminalCommand command={toCommandSlug(activeProject.title)} />

						{/* Active Case */}
						<ProjectSummary
							project={activeProject}
							projectNumber={activeProjectIndex + 1}
						/>

						{/* Facts & Stack */}
						<ProjectDetails project={activeProject} />

						<div className="grid gap-2 pt-[0.35rem]">
							{terminalLines.map((line, index) => (
								<TerminalLine
									key={`${line.kind}-${line.text}`}
									line={line}
									delay={760 + index * 125}
								/>
							))}
						</div>
						<TerminalCommand command="ready for next command" />
					</div>
				</div>
			</div>
		</div>
	);
};

const getTerminalLines = (
	project: Project,
	activeProjectIndex: number,
	totalProjects: number,
): TTerminalLine[] => [
	{
		kind: 'muted',
		text: `Loading public case ${String(activeProjectIndex + 1).padStart(2, '0')} of ${totalProjects}...`,
	},
	{ kind: 'success', prefix: 'CASE', text: project.title },
	{ kind: 'info', prefix: 'MODE', text: project.kicker },
	{
		kind: 'warn',
		prefix: 'STACK',
		text: `${project.stack.length} tools loaded`,
	},
	{
		kind: 'muted',
		text: 'Confidential details redacted. Public signal ready.',
	},
];

const toCommandSlug = (value: string) =>
	value.toLowerCase().replaceAll(' ', '-');
