import { routing } from '@/shared/lib/i18n/routing';

import type { Metadata } from 'next';

export type AppLocale = (typeof routing.locales)[number];

export const SITE_AUTHOR = 'Рустамбеков Искендер';
export const SITE_NAME = 'Рустамбеков Искендер - Frontend Engineer';

export const SITE_KEYWORDS = [
	'Frontend Engineer',
	'React Developer',
	'Next.js Developer',
	'TypeScript Developer',
	'Frontend Architecture',
	'Portfolio',
	'Bishkek',
	'Remote Frontend Developer',
];

export const DEFAULT_LOCALE = routing.defaultLocale;
export const LOCALES = routing.locales;

export const getSiteUrl = () => {
	const rawUrl =
		process.env.NEXT_PUBLIC_SITE_URL ??
		process.env.SITE_URL ??
		process.env.VERCEL_PROJECT_PRODUCTION_URL ??
		process.env.VERCEL_URL;

	if (!rawUrl) {
		if (process.env.NODE_ENV === 'production') {
			throw new Error(
				'Missing NEXT_PUBLIC_SITE_URL or SITE_URL for production SEO.',
			);
		}

		return new URL('http://localhost:3000');
	}

	const normalizedUrl = rawUrl.startsWith('http')
		? rawUrl
		: `https://${rawUrl}`;

	return new URL(normalizedUrl);
};

export const getPathForLocale = (locale: AppLocale, path = '/') => {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;

	if (locale === DEFAULT_LOCALE) {
		return normalizedPath;
	}

	return normalizedPath === '/' ? `/${locale}` : `/${locale}${normalizedPath}`;
};

export const getAbsoluteUrl = (locale: AppLocale, path = '/') =>
	new URL(getPathForLocale(locale, path), getSiteUrl()).toString();

export const getLanguageAlternates = (path = '/') =>
	Object.fromEntries(
		LOCALES.map((locale) => [locale, getPathForLocale(locale, path)]),
	);

export const getPublicLanguageAlternates = (path = '/') => ({
	...getLanguageAlternates(path),
	'x-default': getPathForLocale(DEFAULT_LOCALE, path),
});

export const getMetadataByLocale = (locale: AppLocale) => {
	if (locale === 'ru') {
		return {
			title:
				'Искендер Рустамбеков - Frontend Engineer, React, Next.js, TypeScript',
			description:
				'Портфолио frontend engineer с 4+ годами коммерческого опыта в React, Next.js и TypeScript: продуктовая логика, API-heavy сценарии, real-time интерфейсы и frontend architecture.',
			locale: 'ru_RU',
			alternateLocale: 'en_US',
		};
	}

	return {
		title:
			'Iskender Rustambekov - Frontend Engineer, React, Next.js, TypeScript',
		description:
			'Frontend engineer portfolio with 4+ years of commercial experience in React, Next.js and TypeScript, focused on product logic, API-heavy flows, real-time UI and frontend architecture.',
		locale: 'en_US',
		alternateLocale: 'ru_RU',
	};
};

export const buildRootMetadata = (locale: AppLocale): Metadata => {
	const localizedMetadata = getMetadataByLocale(locale);
	const pagePath = getPathForLocale(locale);

	return {
		metadataBase: getSiteUrl(),
		title: {
			default: localizedMetadata.title,
			template: `%s | ${SITE_AUTHOR}`,
		},
		description: localizedMetadata.description,
		applicationName: SITE_NAME,
		authors: [{ name: SITE_AUTHOR }],
		creator: SITE_AUTHOR,
		publisher: SITE_AUTHOR,
		keywords: SITE_KEYWORDS,
		alternates: {
			canonical: pagePath,
			languages: getPublicLanguageAlternates(),
		},
		openGraph: {
			type: 'website',
			url: pagePath,
			siteName: SITE_NAME,
			title: localizedMetadata.title,
			description: localizedMetadata.description,
			locale: localizedMetadata.locale,
			alternateLocale: localizedMetadata.alternateLocale,
		},
		twitter: {
			card: 'summary',
			title: localizedMetadata.title,
			description: localizedMetadata.description,
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'none',
				'max-snippet': -1,
			},
		},
		category: 'technology',
	};
};

export const buildMainPageJsonLd = (locale: AppLocale) => {
	const metadata = getMetadataByLocale(locale);
	const pageUrl = getAbsoluteUrl(locale);

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${pageUrl}#website`,
				name: SITE_NAME,
				url: pageUrl,
				inLanguage: locale,
			},
			{
				'@type': 'Person',
				'@id': `${pageUrl}#person`,
				name: SITE_AUTHOR,
				jobTitle: 'Frontend Engineer',
				url: pageUrl,
				description: metadata.description,
				knowsAbout: [
					'React',
					'Next.js',
					'TypeScript',
					'Frontend Architecture',
					'API integrations',
					'Real-time interfaces',
				],
			},
		],
	};
};

export const serializeJsonLd = (payload: unknown) =>
	JSON.stringify(payload).replace(/</g, '\\u003c');
