import {
	getRequestConfig,
	type GetRequestConfigParams,
} from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(
	async ({ locale, requestLocale }: GetRequestConfigParams) => {
		// Prefer explicit locale (e.g. from getTranslations); otherwise use the matched segment.
		let resolvedLocale = locale ?? (await requestLocale);

		if (
			!resolvedLocale ||
			!(routing.locales as readonly string[]).includes(resolvedLocale)
		) {
			resolvedLocale = routing.defaultLocale;
		}

		return {
			locale: resolvedLocale,
			messages: (await import(`./messages/${resolvedLocale}.json`)).default,
		};
	},
);
