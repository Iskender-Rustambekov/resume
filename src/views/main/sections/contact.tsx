import {
	FileTextIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	TelegramLogoIcon,
	EnvelopeSimpleIcon,
} from '@phosphor-icons/react/dist/ssr';
import { getTranslations } from 'next-intl/server';

import { serverGetMainPageContactLinks } from '@/shared/api/generated/portfolio/server/main-page/main-page';
import { publicStaticRequestOptions } from '@/shared/api/server/requestOptions';

import styles from '../styles.module.css';

export const ContactSection = async () => {
	const [links, t] = await Promise.all([
		serverGetMainPageContactLinks(publicStaticRequestOptions),
		getTranslations('mainPage.contact'),
	]);

	return (
		<section id="contact" className="relative py-16 sm:py-24">
			<div className="container">
				<div
					data-motion="reveal"
					className="relative overflow-hidden rounded-3xl border border-border bg-card/75 p-5 shadow-2xl sm:p-10 lg:rounded-[2rem] lg:p-16"
				>
					<div className={`${styles.speedLines} absolute inset-0 opacity-20`} />
					<div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
						<div className="min-w-0">
							<p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
								{t('kicker')}
							</p>
							<h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-6xl sm:leading-none lg:text-8xl">
								{t('title')}
							</h2>
						</div>
						<div className="grid gap-3 sm:grid-cols-2 lg:flex lg:flex-col">
							<a
								href={links.email}
								className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground sm:text-base"
							>
								<EnvelopeSimpleIcon className="size-5 shrink-0" weight="bold" />
								{t('email')}
							</a>
							<a
								href={links.github}
								target="_blank"
								className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-4 py-3 text-sm font-medium transition hover:bg-muted sm:text-base"
							>
								<GithubLogoIcon className="size-5 shrink-0" weight="bold" />
								{t('github')}
							</a>
							<a
								href={links.linkedin}
								target="_blank"
								className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-4 py-3 text-sm font-medium transition hover:bg-muted sm:text-base"
							>
								<LinkedinLogoIcon className="size-5 shrink-0" weight="bold" />
								{t('linkedin')}
							</a>
							<a
								href={links.telegram}
								target="_blank"
								className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-4 py-3 text-sm font-medium transition hover:bg-muted sm:text-base"
							>
								<TelegramLogoIcon className="size-5 shrink-0" weight="bold" />
								{t('telegram')}
							</a>
							<a
								href={links.resume}
								className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-4 py-3 text-sm font-medium transition hover:bg-muted sm:col-span-2 sm:text-base lg:col-span-1"
							>
								<FileTextIcon className="size-5 shrink-0" weight="bold" />
								{t('cv')}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
