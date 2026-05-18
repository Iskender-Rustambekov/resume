import { getSiteUrl } from '@/shared/config/seo';

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	const siteUrl = getSiteUrl();

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/login', '/ru/login'],
		},
		sitemap: new URL('/sitemap.xml', siteUrl).toString(),
		host: siteUrl.origin,
	};
}
