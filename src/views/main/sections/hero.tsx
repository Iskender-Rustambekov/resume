import {
	ArrowUpRightIcon,
	GithubLogoIcon,
} from '@phosphor-icons/react/dist/ssr';
import { getTranslations } from 'next-intl/server';

import { serverGetMainPageContactLinks } from '@/shared/api/generated/portfolio/server/main-page/main-page';
import { publicStaticRequestOptions } from '@/shared/api/server/requestOptions';

export const HeroSection = async () => {
	const [links, t] = await Promise.all([
		serverGetMainPageContactLinks(publicStaticRequestOptions),
		getTranslations('mainPage.hero'),
	]);

	return (
		<section
			id="origin"
			data-motion="hero-section"
			className="relative z-0 flex min-h-screen items-center pb-20 pt-28"
		>
			<div className="container grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
				<div data-motion="hero-copy" className="max-w-4xl">
					<p className="mb-6 inline-flex rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-primary">
						{t('title')} {t('titleAccent')}
					</p>
					<h1 className="max-w-5xl text-[clamp(3.8rem,10vw,9.8rem)] font-semibold leading-[0.86] tracking-normal text-foreground">
						Frontend
						<span className="block text-muted-foreground">Developer</span>
					</h1>
					<p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
						{t('description')}
					</p>
					<div className="mt-9 flex flex-wrap gap-3">
						<a
							href="#projects"
							className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground"
						>
							{t('projectsCta')}
							<ArrowUpRightIcon
								className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								weight="bold"
							/>
						</a>
						<a
							href={links?.github}
							target="_blank"
							className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium transition hover:bg-muted"
						>
							<GithubLogoIcon className="size-5" weight="bold" />
							{t('githubCta')}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
