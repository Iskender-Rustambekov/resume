'use client';

import { GlobeHemisphereWestIcon } from '@phosphor-icons/react';
import { useLocale } from 'next-intl';

import { Link, usePathname } from '@/shared/lib/i18n/navigation';
import { cn } from '@/shared/utils';

const locales = [
	{ code: 'en', label: 'EN' },
	{ code: 'ru', label: 'RU' },
] as const;

export const LocaleSwitch = () => {
	const locale = useLocale();
	const pathname = usePathname();

	return (
		<div
			className="inline-flex items-center gap-1 rounded-full border border-border bg-card/70 p-1 shadow-sm"
			aria-label="Select language"
		>
			<span className="grid size-7 place-items-center rounded-full text-primary">
				<GlobeHemisphereWestIcon className="size-4" weight="bold" />
			</span>

			{locales.map((item) => {
				const isActive = locale === item.code;

				return (
					<Link
						key={item.code}
						href={pathname}
						locale={item.code}
						aria-current={isActive ? 'true' : undefined}
						className={cn(
							'grid h-7 min-w-9 place-items-center rounded-full px-2 text-xs font-semibold transition',
							isActive
								? 'bg-primary text-primary-foreground shadow-sm'
								: 'text-muted-foreground hover:bg-muted hover:text-foreground',
						)}
					>
						{item.label}
					</Link>
				);
			})}
		</div>
	);
};
