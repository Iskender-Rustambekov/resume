'use client';

import { useMemo, useState, type CSSProperties } from 'react';

import { SectionHeading } from '@/shared/ui/components';

import { projects, type Project } from '../../model';
import styles from '../main-page.module.css';

export const FramesSection = () => {
	const [activeProjectIndex, setActiveProjectIndex] = useState(0);
	const activeProject = projects[activeProjectIndex] ?? projects[0];

	return (
		<section id="projects" className="relative py-24">
			<div className="container grid gap-14">
				<SectionHeading
					motion="reveal"
					kicker="Selected projects"
					title="Project cases as a readable command session."
				/>

				{activeProject ? (
					<ProjectTerminal
						activeProject={activeProject}
						activeProjectIndex={activeProjectIndex}
						onProjectChange={setActiveProjectIndex}
					/>
				) : null}
			</div>
		</section>
	);
};

type ProjectTerminalProps = {
	activeProject: Project;
	activeProjectIndex: number;
	onProjectChange: (index: number) => void;
};

const ProjectTerminal = ({
	activeProject,
	activeProjectIndex,
	onProjectChange,
}: ProjectTerminalProps) => {
	const terminalLines = useMemo(
		() => getTerminalLines(activeProject, activeProjectIndex),
		[activeProject, activeProjectIndex],
	);

	return (
		<div data-motion="reveal" className={styles.terminalShell}>
			<div className={styles.terminalTitlebar}>
				<div className={styles.terminalAppIcon}>
					<span>C:\</span>
				</div>
				<p className={styles.terminalTitle}>
					C:\Windows\System32\cmd.exe - portfolio\projects
				</p>
				<div className={styles.terminalWindowControls} aria-hidden="true">
					<span>-</span>
					<span>[]</span>
					<span>x</span>
				</div>
			</div>

			<div className={styles.terminalGrid}>
				<aside className={styles.terminalSidebar}>
					<p className={styles.terminalMuted}>Available commands</p>
					<div className="mt-4 grid gap-2">
						{projects.map((project, index) => {
							const isActive = index === activeProjectIndex;

							return (
								<button
									key={project.title}
									type="button"
									onClick={() => onProjectChange(index)}
									className={`${styles.terminalCommand} ${
										isActive ? styles.terminalCommandActive : ''
									}`}
								>
									<span className={styles.terminalPromptSmall}>run</span>
									<span>case:{toCommandSlug(project.title)}</span>
								</button>
							);
						})}
					</div>
				</aside>

				<div className={styles.terminalScreen}>
					<div className={styles.terminalScanlines} />
					<div key={activeProject.title} className={styles.terminalOutput}>
						<div className={styles.terminalLine}>
							<span className={styles.terminalPrompt}>C:\portfolio&gt;</span>
							<span
								className={styles.terminalType}
								style={
									{
										'--terminal-chars': String(
											`run case:${toCommandSlug(activeProject.title)}`.length,
										),
										'--terminal-delay': '80ms',
									} as CSSProperties
								}
							>
								run case:{toCommandSlug(activeProject.title)}
							</span>
						</div>

						<div
							className={styles.terminalCaseHeader}
							style={{ '--terminal-delay': '360ms' } as CSSProperties}
						>
							<div>
								<p className={styles.terminalMuted}>ACTIVE CASE</p>
								<h3>{activeProject.title}</h3>
								<p>{activeProject.description}</p>
							</div>
							<div className={styles.terminalCaseMeta}>
								<span>{String(activeProjectIndex + 1).padStart(2, '0')}</span>
								<span>{activeProject.kicker}</span>
							</div>
						</div>

						<div
							className={styles.terminalReadableGrid}
							style={{ '--terminal-delay': '520ms' } as CSSProperties}
						>
							<div className={styles.terminalReadablePanel}>
								<p className={styles.terminalMuted}>FACTS</p>
								<div className="mt-3 grid gap-2">
									{activeProject.facts.map((fact, index) => (
										<div key={fact} className={styles.terminalFact}>
											<span>#{String(index + 1).padStart(2, '0')}</span>
											<p>{fact}</p>
										</div>
									))}
								</div>
							</div>

							<div className={styles.terminalReadablePanel}>
								<p className={styles.terminalMuted}>STACK</p>
								<div className={styles.terminalStackList}>
									{activeProject.stack.map((item) => (
										<span key={item}>{item}</span>
									))}
								</div>
							</div>
						</div>

						<div className={styles.terminalBlock}>
							{terminalLines.map((line, index) => (
								<p
									key={`${line.kind}-${line.text}`}
									className={`${styles.terminalLine} ${terminalLineClassNames[line.kind]}`}
									style={
										{
											'--terminal-delay': `${760 + index * 125}ms`,
										} as CSSProperties
									}
								>
									{line.prefix ? (
										<span className={styles.terminalKey}>{line.prefix}</span>
									) : null}
									<span>{line.text}</span>
								</p>
							))}
						</div>

						<div
							className={`${styles.terminalLine} ${styles.terminalStatusLine}`}
							style={
								{
									'--terminal-delay': `${920 + terminalLines.length * 125}ms`,
								} as CSSProperties
							}
						>
							<span className={styles.terminalPrompt}>C:\portfolio&gt;</span>
							<span>ready for next command</span>
							<span className={styles.terminalCursor} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

type TerminalLine = {
	kind: 'info' | 'success' | 'warn' | 'muted';
	prefix?: string;
	text: string;
};

const getTerminalLines = (
	project: Project,
	activeProjectIndex: number,
): TerminalLine[] => [
	{
		kind: 'muted',
		text: `Loading public case ${String(activeProjectIndex + 1).padStart(2, '0')} of ${projects.length}...`,
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

const terminalLineClassNames: Record<TerminalLine['kind'], string> = {
	info: styles.terminalInfo,
	muted: styles.terminalMutedLine,
	success: styles.terminalSuccess,
	warn: styles.terminalWarn,
};

const toCommandSlug = (value: string) =>
	value.toLowerCase().replaceAll(' ', '-');
