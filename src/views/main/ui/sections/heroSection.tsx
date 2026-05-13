import Image from 'next/image';

import { ArrowUpRightIcon, GithubLogoIcon } from '@phosphor-icons/react';

import { contactLinks } from '../../model';

export const HeroSection = () => {
	return (
		<section
			id="origin"
			data-motion="hero-section"
			className="relative z-0 flex min-h-screen items-center pb-20 pt-28"
		>
			<div className="container grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
				<div data-motion="hero-copy" className="max-w-4xl">
					<p className="mb-6 inline-flex rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-primary">
						Frontend Engineer / React TypeScript Engineer
					</p>
					<h1 className="max-w-5xl text-[clamp(3.8rem,10vw,9.8rem)] font-semibold leading-[0.86] tracking-normal text-foreground">
						Frontend
						<span className="block text-muted-foreground">Viltrumite.</span>
					</h1>
					<p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
						4+ years of commercial experience building web products with
						React, Next.js and TypeScript. Focused on complex product logic,
						API-heavy flows, real-time behavior and frontend architecture for
						scalable applications.
					</p>
					<div className="mt-9 flex flex-wrap gap-3">
						<a
							href="#projects"
							className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground"
						>
							View projects
							<ArrowUpRightIcon
								className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								weight="bold"
							/>
						</a>
						<a
							href={contactLinks.github}
							target="_blank"
							className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-medium transition hover:bg-muted"
						>
							<GithubLogoIcon className="size-5" weight="bold" />
							GitHub
						</a>
					</div>
				</div>

				<div
					data-motion="hero-visual"
					className="relative mx-auto aspect-[0.82] w-full max-w-130"
				>
					<div data-motion="hero-parallax">
						<div data-motion="hero-breathing">
							<Image
								src="/media/images/main-page/hero4.png"
								alt="hero-section-image"
								className="min-h-150 max-h-200 h-full object-contain"
								width={500}
								height={800}
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
