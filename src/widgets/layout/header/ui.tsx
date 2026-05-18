'use client';

import { SparkleIcon } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';

import { LocaleSwitch } from '@/entities/locale';
import { ThemeSwitch } from '@/entities/theme';

export const Header = () => {
	const t = useTranslations('header');
	const navItems = [
		{ label: t('nav.origin'), href: '#origin' },
		{ label: t('nav.projects'), href: '#projects' },
		{ label: t('nav.work'), href: '#craft' },
		{ label: t('nav.experience'), href: '#experience' },
		{ label: t('nav.contact'), href: '#contact' },
	];

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
						<span className="hidden font-medium sm:inline">{t('brand')}</span>
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
						<LocaleSwitch />
						<ThemeSwitch />
					</div>
				</nav>
			</div>
		</header>
	);
};
