import React from 'react';

import { EnvelopeSimple, GithubLogo } from '@phosphor-icons/react';

import { Button } from '@/shared/ui/shadcn/ui/button';

export const Header = () => {
	return (
		<header className="flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
			<div className="max-w-2xl">
				<p className="mb-4 text-sm font-medium text-muted-foreground">
					Frontend Developer
				</p>
				<h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
					Your Name
				</h1>
				<p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
					I build fast, accessible and maintainable web interfaces with React,
					Next.js and TypeScript. This page is a starter resume shell ready for
					real content.
				</p>
			</div>

			<div className="flex flex-wrap gap-2">
				<Button asChild>
					<a href="mailto:frontend@example.com">
						<EnvelopeSimple weight="bold" />
						Contact
					</a>
				</Button>
				<Button variant="outline" asChild>
					<a href="https://github.com/username" target="_blank">
						<GithubLogo weight="bold" />
						GitHub
					</a>
				</Button>
			</div>
		</header>
	);
};
