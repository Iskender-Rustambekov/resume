import React from 'react';

import { SparkleIcon } from '@phosphor-icons/react';

import { ThemeSwitch } from '@/entities/theme';

export const Header = () => {
	return (
		<header className="fixed w-full z-40 top-4">
			<div className="container">
				<nav
					data-motion="nav"
					className="flex items-center justify-between rounded-full border border-border bg-card/75 px-3 py-2 text-sm shadow-2xl"
				>
					<a
						href="#origin"
						className="flex items-center gap-2 px-2 text-foreground"
					>
						<span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground">
							<SparkleIcon className="size-4" weight="fill" />
						</span>
						<span className="hidden font-medium sm:inline">Portfolio</span>
					</a>
					<div className="hidden items-center gap-1 md:flex">
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="rounded-full px-4 py-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
							>
								{item.label}
							</a>
						))}
					</div>
					<div className="flex items-center gap-2">
						<ThemeSwitch />
						<a
							href="mailto:your.email@example.com"
							className="hidden rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground transition hover:bg-secondary hover:text-secondary-foreground sm:inline-flex"
						>
							Contact
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
};

const navItems = [
	{ label: 'Origin', href: '#origin' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Work', href: '#craft' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Contact', href: '#contact' },
];
