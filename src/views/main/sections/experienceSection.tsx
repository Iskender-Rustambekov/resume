'use client';
import { BriefcaseIcon } from '@phosphor-icons/react';

import { ExperienceCard } from '@/entities/experience';
import { SectionHeading } from '@/shared/ui/components';

import { workExperience } from '../model';

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
					<ExperienceCard
						key={`${item.company}-${item.period}`}
						item={item}
						index={String(workExperience.length - index).padStart(2, '0')}
					/>
				))}
			</div>
		</section>
	);
};
