import { routing } from '@/shared/lib/i18n/routing';

const supportedLocales = routing.locales as readonly string[];

export const resolveRequestLocale = (
	acceptLanguage?: string | null,
	fallback = routing.defaultLocale,
) => {
	if (!acceptLanguage) {
		return fallback;
	}

	const languages = acceptLanguage
		.split(',')
		.map((language) => language.trim().split(';')[0]?.toLowerCase())
		.filter(Boolean);

	for (const language of languages) {
		const locale = language.split('-')[0];

		if (locale && supportedLocales.includes(locale)) {
			return locale;
		}
	}

	return fallback;
};
