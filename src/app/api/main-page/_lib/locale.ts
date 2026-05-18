export type MainPageLocale = 'en' | 'ru';

export const DEFAULT_LOCALE: MainPageLocale = 'en';
export const SUPPORTED_LOCALES: MainPageLocale[] = ['en', 'ru'];

export const getLocaleFromAcceptLanguage = (
	acceptLanguage?: string | null,
): MainPageLocale => {
	if (!acceptLanguage) {
		return DEFAULT_LOCALE;
	}

	const languages = acceptLanguage
		.split(',')
		.map((language) => language.trim().split(';')[0]?.toLowerCase())
		.filter(Boolean);

	for (const language of languages) {
		const locale = language.split('-')[0] as MainPageLocale;

		if (SUPPORTED_LOCALES.includes(locale)) {
			return locale;
		}
	}

	return DEFAULT_LOCALE;
};
