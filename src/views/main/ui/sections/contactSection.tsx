import {
	EnvelopeSimpleIcon,
	FileTextIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	TelegramLogoIcon,
} from '@phosphor-icons/react';

import { contactLinks } from '../../model';
import styles from '../main-page.module.css';

export const ContactSection = () => {
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
								Contact
							</p>
							<h2 className="max-w-4xl text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-normal">
								Open to remote frontend opportunities.
							</h2>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col">
							<a
								href={contactLinks.email}
								className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground"
							>
								<EnvelopeSimpleIcon className="size-5" weight="bold" />
								Email
							</a>
							<a
								href={contactLinks.github}
								target="_blank"
								className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium transition hover:bg-muted"
							>
								<GithubLogoIcon className="size-5" weight="bold" />
								GitHub
							</a>
							<a
								href={contactLinks.linkedin}
								target="_blank"
								className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium transition hover:bg-muted"
							>
								<LinkedinLogoIcon className="size-5" weight="bold" />
								LinkedIn
							</a>
							<a
								href={contactLinks.telegram}
								target="_blank"
								className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium transition hover:bg-muted"
							>
								<TelegramLogoIcon className="size-5" weight="bold" />
								Telegram
							</a>
							<a
								href={contactLinks.resume}
								className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium transition hover:bg-muted"
							>
								<FileTextIcon className="size-5" weight="bold" />
								CV
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
