import { type CSSProperties } from 'react';

import { type Project } from '@/shared/api/generated/portfolio/types';
import { cn } from '@/shared/utils';

import styles from './styles.module.css';

// Everything is in one file here because the components are too small and without serious logic.

// ===============================================
export const TerminalHeader = () => (
	<div className="relative z-1 grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-primary/25 bg-card/30 px-4 py-[0.85rem]">
		<div className="grid h-6 w-8 place-items-center rounded-[0.18rem] bg-primary text-[0.7rem] text-primary-foreground shadow-md shadow-primary/30">
			<span>C:\</span>
		</div>

		<p className="overflow-hidden text-ellipsis whitespace-nowrap text-[0.78rem] text-white">
			C:\Windows\System32\cmd.exe - portfolio\projects
		</p>

		<div
			className={cn(
				styles.terminalWindowControls,
				'grid h-7 grid-cols-[repeat(3,2.25rem)] items-stretch justify-end overflow-hidden rounded-xl border border-primary/30 text-[0.95rem] text-white',
			)}
			aria-hidden="true"
		>
			<span>-</span>
			<span>[]</span>
			<span>x</span>
		</div>
	</div>
);

// ===============================================
interface ITerminalCommandProps {
	command: string;
}
export const TerminalCommand = ({ command }: ITerminalCommandProps) => {
	return (
		<div className="flex max-w-full items-baseline gap-[0.65rem] text-[clamp(0.82rem,1.8vw,1rem)] leading-[1.65] wrap-anywhere">
			<span className="shrink-0 text-primary">C:\portfolio&gt;</span>
			<span
				className={cn(
					'inline-block w-0 max-w-max overflow-hidden whitespace-nowrap border-r-[0.6em] border-primary',
					styles.terminalType,
				)}
				style={
					{
						'--terminal-chars': String(command.length + 1),
						'--terminal-delay': '80ms',
					} as CSSProperties
				}
			>
				{command}
			</span>
		</div>
	);
};

// ===============================================
interface IProjectCommandProps {
	commandSlug: string;
	runLabel: string;
	isActive: boolean;
	onSelect: () => void;
}

export const ProjectCommand = ({
	commandSlug,
	runLabel,
	isActive,
	onSelect,
}: IProjectCommandProps) => (
	<button
		type="button"
		onClick={onSelect}
		className={cn(
			'grid grid-cols-[auto_1fr] items-center gap-[0.65rem] rounded-[0.8rem] border border-primary/25 bg-card/40 px-[0.9rem] py-[0.82rem] text-left text-[0.86rem] text-white transition-[border-color,background,color,transform,box-shadow] duration-200 ease-out hover:translate-x-1 hover:border-primary hover:bg-card/60 hover:shadow-inner',
			isActive && 'translate-x-1 border-primary bg-card/60 shadow-inner',
		)}
	>
		<span className="text-primary">{runLabel}</span>
		<span>case:{commandSlug}</span>
	</button>
);

// ===============================================
interface IProjectSummaryProps {
	project: Project;
	projectNumber: number;
	activeCaseLabel: string;
}

export const ProjectSummary = ({
	project,
	projectNumber,
	activeCaseLabel,
}: IProjectSummaryProps) => (
	<div
		className={cn(
			styles.terminalReveal,
			styles.terminalCaseHeader,
			'grid gap-4 rounded-2xl border border-primary/25 bg-card/30 p-[1.15rem] shadow-inner lg:grid-cols-[1fr_auto]',
		)}
		style={{ '--terminal-delay': '360ms' } as CSSProperties}
	>
		<div>
			<p className="text-[0.78rem] opacity-80">{activeCaseLabel}</p>
			<h3 className="mt-[0.45rem] text-[clamp(2rem,5vw,4.4rem)] leading-[0.95] font-bold text-white">
				{project.title}
			</h3>
			<p>{project.description}</p>
		</div>

		<div
			className={cn(
				styles.terminalCaseMeta,
				'flex flex-wrap items-start gap-[0.65rem]',
			)}
		>
			<span>{String(projectNumber).padStart(2, '0')}</span>
			<span>{project.kicker}</span>
		</div>
	</div>
);

// ===============================================
interface IProjectDetailsProps {
	project: Project;
	factsLabel: string;
	stackLabel: string;
}

export const ProjectDetails = ({
	project,
	factsLabel,
	stackLabel,
}: IProjectDetailsProps) => (
	<div
		className={cn(
			styles.terminalReveal,
			'grid gap-[0.9rem] lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.68fr)]',
		)}
		style={{ '--terminal-delay': '520ms' } as CSSProperties}
	>
		<div className="rounded-2xl border border-primary/25 bg-secondary-foreground p-[0.95rem]">
			<p className="text-[0.78rem] opacity-80">{factsLabel}</p>

			<div className="mt-3 grid gap-2">
				{project.facts.map((fact, index) => (
					<div
						key={fact}
						className={cn(
							styles.terminalFact,
							'grid grid-cols-[auto_1fr] items-center gap-3 rounded-xl border border-primary/25 bg-card/40 px-[0.7rem] py-[0.62rem]',
						)}
					>
						<span>#{String(index + 1).padStart(2, '0')}</span>
						<p>{fact}</p>
					</div>
				))}
			</div>
		</div>

		<div className="rounded-2xl border border-primary/25 bg-secondary-foreground p-[0.95rem]">
			<p className="text-[0.78rem] opacity-80">{stackLabel}</p>

			<div
				className={cn(
					styles.terminalStackList,
					'mt-[0.85rem] flex flex-wrap gap-2',
				)}
			>
				{project.stack.map((item) => (
					<span key={item}>{item}</span>
				))}
			</div>
		</div>
	</div>
);

// ===============================================
export type TTerminalLine = {
	kind: 'info' | 'success' | 'warn' | 'muted';
	prefix?: string;
	text: string;
};

interface ITerminalLineProps {
	line: TTerminalLine;
	delay: number;
}

const getTerminalLineClassName = (kind: TTerminalLine['kind']) => {
	switch (kind) {
		case 'success':
			return 'text-primary';
		case 'warn':
			return 'text-secondary';
		case 'muted':
			return 'text-[0.78rem] opacity-80';
		default:
			return 'text-white';
	}
};

export const TerminalLine = ({ line, delay }: ITerminalLineProps) => (
	<p
		className={cn(
			'flex max-w-full items-baseline gap-[0.65rem] text-[clamp(0.82rem,1.8vw,1rem)] leading-[1.65] wrap-anywhere',
			styles.terminalReveal,
			getTerminalLineClassName(line.kind),
		)}
		style={{ '--terminal-delay': `${delay}ms` } as CSSProperties}
	>
		{line.prefix ? (
			<span className="min-w-21 shrink-0 text-primary">{line.prefix}</span>
		) : null}
		<span>{line.text}</span>
	</p>
);
