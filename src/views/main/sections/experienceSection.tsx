import { BriefcaseIcon } from '@phosphor-icons/react/dist/ssr';
import { getTranslations } from 'next-intl/server';

import { ExperienceCardList } from '@/features/experience';
import { SectionHeading } from '@/shared/ui/components';

export const ExperienceSection = async () => {
	const t = await getTranslations('mainPage.experience');

	return (
		<section
			id="experience"
			className="container relative grid gap-12 py-24 lg:grid-cols-[0.72fr_1.28fr]"
		>
			<div className="grid content-start gap-8">
				<SectionHeading
					className="max-w-3xl"
					motion="reveal"
					kicker={t('kicker')}
					title={t('title')}
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
							<p className="text-2xl font-semibold">{t('range')}</p>
							<p className="text-sm text-muted-foreground">{t('summary')}</p>
						</div>
					</div>
					<p className="leading-7 text-muted-foreground">{t('description')}</p>
				</div>

				<div
					data-motion="reveal"
					className="grid gap-4 rounded-[1.5rem] border border-border bg-card/70 p-5 shadow-xl"
				>
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
							{t('languages')}
						</p>
						<p className="mt-2 text-sm leading-6 text-muted-foreground">
							{t('languagesDescription')}
						</p>
					</div>

					<div className="flex flex-wrap gap-2">
						<span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
							{t('english')}
						</span>
						<span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
							{t('russian')}
						</span>
						<span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
							{t('kyrgyz')}
						</span>
					</div>
				</div>
			</div>

			<ExperienceCardList showIndex />
		</section>
	);
};
