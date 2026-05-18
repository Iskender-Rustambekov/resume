import {
	FileTextIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	TelegramLogoIcon,
	EnvelopeSimpleIcon,
} from '@phosphor-icons/react/dist/ssr';
import { getTranslations } from 'next-intl/server';

import { serverGetMainPageContactLinks } from '@/shared/api/generated/portfolio/server/main-page/main-page';
import type { ServerApiOptions } from '@/shared/api/server/orvalInstance';

import styles from '../main-page.module.css';

const publicStaticRequestOptions = {
	auth: 'none',
	cache: 'force-cache',
} satisfies ServerApiOptions;

export const ContactSection = async () => {
	const [links, t] = await Promise.all([
		serverGetMainPageContactLinks(publicStaticRequestOptions),
		getTranslations('mainPage.contact'),
	]);

	return (
		<section id="contact" className="relative py-24">
			<div className="container">
				<div
					data-motion="reveal"
					className="relative overflow-hidden rounded-[2rem] border border-border bg-card/75 p-8 shadow-2xl sm:p-12 lg:p-16"
				>
					<div className={`${styles.speedLines} absolute inset-0 opacity-20`} />
					<div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
						<div>
							<p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
								{t('kicker')}
							</p>
							<h2 className="max-w-4xl text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-normal">
								{t('title')}
							</h2>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col">
							<a
								href={links.email}
								className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground"
							>
								<EnvelopeSimpleIcon className="size-5" weight="bold" />
								{t('email')}
							</a>
							<a
								href={links.github}
								target="_blank"
								className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium transition hover:bg-muted"
							>
								<GithubLogoIcon className="size-5" weight="bold" />
								{t('github')}
							</a>
							<a
								href={links.linkedin}
								target="_blank"
								className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium transition hover:bg-muted"
							>
								<LinkedinLogoIcon className="size-5" weight="bold" />
								{t('linkedin')}
							</a>
							<a
								href={links.telegram}
								target="_blank"
								className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium transition hover:bg-muted"
							>
								<TelegramLogoIcon className="size-5" weight="bold" />
								{t('telegram')}
							</a>
							<a
								href={links.resume}
								className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium transition hover:bg-muted"
							>
								<FileTextIcon className="size-5" weight="bold" />
								{t('cv')}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
