import { SectionHeading } from '@/shared/ui/components';

import { processSteps } from '../../model';

const signalLines = [
	'clarify rules',
	'define contracts',
	'map states',
	'cover edge cases',
	'ship stable flow',
];

export const CraftSection = () => {
	return (
		<section
			id="craft"
			className="container relative grid gap-10 py-24 lg:grid-cols-[0.88fr_1.12fr]"
		>
			<div className="grid content-start gap-8">
				<SectionHeading
					motion="reveal"
					kicker="What I actually do"
					title="The parts of frontend work I can own end to end."
				/>

				<div data-motion="reveal" className="grid gap-4 text-muted-foreground">
					<p className="max-w-2xl text-lg leading-8">
						I am most useful when the task is bigger than drawing screens:
						turning product rules, backend contracts and unclear edge cases into
						frontend behavior that the team can maintain.
					</p>
					<p className="max-w-2xl leading-7">
						That includes writing technical requirements, discussing API shape
						early, building the request/state layer, and checking how the flow
						behaves when data is slow, invalid or simply not the happy path.
					</p>
				</div>

				<div
					data-motion="craft-console"
					className="relative overflow-hidden rounded-[1.5rem] border border-border bg-card/70 p-5 shadow-xl"
				>
					<div className="mb-5 flex items-center justify-between gap-4">
						<div className="flex gap-2">
							<span className="size-2.5 rounded-full bg-primary" />
							<span className="size-2.5 rounded-full bg-secondary" />
							<span className="size-2.5 rounded-full bg-accent" />
						</div>
						<span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
							delivery flow
						</span>
					</div>

					<div className="grid gap-3">
						{signalLines.map((line, index) => (
							<div
								key={line}
								data-motion="craft-line"
								className="grid grid-cols-[1.75rem_1fr_auto] items-center gap-3 rounded-xl border border-border/70 bg-background/55 px-3 py-2.5"
							>
								<span className="text-xs font-semibold text-primary">
									{String(index + 1).padStart(2, '0')}
								</span>
								<span className="h-1.5 overflow-hidden rounded-full bg-muted">
									<span
										data-motion="craft-line-fill"
										className="block h-full rounded-full bg-primary"
									/>
								</span>
								<span className="text-xs font-medium text-muted-foreground">
									{line}
								</span>
							</div>
						))}
					</div>

					<div
						data-motion="craft-pulse"
						className="absolute right-6 top-6 size-16 rounded-full border border-primary/35"
					/>
				</div>
			</div>

			<div data-motion="stagger-panel" className="grid gap-4">
				{processSteps.map((item) => (
					<article
						key={item.value}
						className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-card/75 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card"
					>
						<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />

						<div className="flex flex-wrap items-start justify-between gap-5">
							<div>
								<span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
									{item.value}
								</span>
								<h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
							</div>
							<span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
								{item.metric}
							</span>
						</div>

						<p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
							{item.text}
						</p>
						<p className="mt-5 border-l border-primary/45 pl-4 text-sm font-medium text-foreground">
							{item.tone}
						</p>
					</article>
				))}
			</div>
		</section>
	);
};
