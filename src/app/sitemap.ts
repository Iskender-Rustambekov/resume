import {
	getAbsoluteUrl,
	getPublicLanguageAlternates,
	LOCALES,
} from '@/shared/config/seo';

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return LOCALES.map((locale) => ({
		url: getAbsoluteUrl(locale),
		lastModified,
		changeFrequency: 'monthly',
		priority: locale === 'en' ? 1 : 0.9,
		alternates: {
			languages: getPublicLanguageAlternates(),
		},
	}));
}
