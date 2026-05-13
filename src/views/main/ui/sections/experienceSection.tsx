import {
	BriefcaseIcon,
	CalendarDotsIcon,
	MapPinIcon,
	NavigationArrowIcon,
} from '@phosphor-icons/react';

import { SectionHeading } from '@/shared/ui/components';

import { workExperience } from '../../model';

export const ExperienceSection = () => {
	return (
		<section
			id="experience"
			className="container relative grid gap-12 py-24 lg:grid-cols-[0.72fr_1.28fr]"
		>
			<div className="grid content-start gap-8">
				<SectionHeading
					className="max-w-3xl"
					motion="reveal"
					kicker="Experience"
					title="Where that work happened."
				/>

				<div
					data-motion="reveal"
					className="grid gap-4 rounded-[1.5rem] border border-border bg-card/70 p-5 shadow-xl"
				>
					<div className="flex items-center gap-3">
						<span className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground">
							<BriefcaseIcon className="size-5" weight="bold" />
						</span>
						<div>
							<p className="text-2xl font-semibold">2021 - 2026</p>
							<p className="text-sm text-muted-foreground">
								Remote, office, contract and confidential product work.
							</p>
						</div>
					</div>
					<p className="leading-7 text-muted-foreground">
						This section is the map: dates, roles and environments. The deeper
						project details live above, where they are easier to compare.
					</p>
				</div>

				<div
					data-motion="reveal"
					className="grid gap-4 rounded-[1.5rem] border border-border bg-card/70 p-5 shadow-xl"
				>
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
							Languages
						</p>
						<p className="mt-2 text-sm leading-6 text-muted-foreground">
							Comfortable across local teams and English-speaking product
							contexts.
						</p>
					</div>

					<div className="flex flex-wrap gap-2">
						<span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
							English B1
						</span>
						<span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
							Russian native
						</span>
						<span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
							Kyrgyz native
						</span>
					</div>
				</div>
			</div>

			<div data-motion="stagger-panel" className="relative grid gap-5">
				<div className="absolute bottom-8 left-5 top-8 hidden w-px bg-border sm:block" />

				{workExperience.map((item, index) => (
					<article
						key={`${item.company}-${item.period}`}
						className="group relative grid gap-4 rounded-[1.5rem] border border-border bg-card/75 p-5 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card sm:ml-12"
					>
						<span className="absolute -left-14 top-7 hidden size-10 place-items-center rounded-full border border-border bg-background text-sm font-semibold text-primary shadow-lg transition group-hover:border-primary sm:grid">
							{String(workExperience.length - index).padStart(2, '0')}
						</span>

						<div className="flex flex-wrap items-start justify-between gap-4">
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
									{item.company}
								</p>
								<h3 className="mt-2 text-xl font-semibold sm:text-2xl">
									{item.role}
								</h3>
							</div>
							<span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
								{item.employmentType}
							</span>
						</div>

						<div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
							<span className="inline-flex items-center gap-2">
								<CalendarDotsIcon
									className="size-4 text-primary"
									weight="bold"
								/>
								{item.period}
							</span>
							<span className="inline-flex items-center gap-2">
								<NavigationArrowIcon
									className="size-4 text-primary"
									weight="bold"
								/>
								{item.duration}
							</span>
							<span className="inline-flex items-center gap-2">
								<MapPinIcon className="size-4 text-primary" weight="bold" />
								{item.location} / {item.mode}
							</span>
						</div>

						<p className="max-w-3xl text-sm leading-6 text-muted-foreground">
							{item.description}
						</p>

						<div className="flex flex-wrap gap-2">
							{item.stack.map((skill) => (
								<span
									key={skill}
									className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground"
								>
									{skill}
								</span>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	);
};
