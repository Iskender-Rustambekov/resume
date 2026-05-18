'use client';
import { useTranslations } from 'next-intl';

export const Footer = () => {
	const t = useTranslations('mainPage.footer');

	return (
		<footer className="container flex flex-col gap-3 pb-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
			<p>{t('caption')}</p>
			<p>{t('location')}</p>
		</footer>
	);
};
