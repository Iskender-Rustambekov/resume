'use client';

import {
	CalendarDotsIcon,
	MapPinIcon,
	NavigationArrowIcon,
} from '@phosphor-icons/react';

import { type ExperienceItem } from '@/shared/api/generated/portfolio/types';

interface IExperienceCardProps {
	item: ExperienceItem;
	index?: number | string;
}

export const ExperienceCard = ({ item, index }: IExperienceCardProps) => {
	return (
		<article className="group relative grid gap-4 rounded-[1.5rem] border border-border bg-card/75 p-5 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card sm:ml-12">
			{!!index && (
				<span className="absolute -left-14 top-7 hidden size-10 place-items-center rounded-full border border-border bg-background text-sm font-semibold text-primary shadow-lg transition group-hover:border-primary sm:grid">
					{index}
				</span>
			)}

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
					<CalendarDotsIcon className="size-4 text-primary" weight="bold" />
					{item.period}
				</span>
				<span className="inline-flex items-center gap-2">
					<NavigationArrowIcon className="size-4 text-primary" weight="bold" />
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
	);
};
