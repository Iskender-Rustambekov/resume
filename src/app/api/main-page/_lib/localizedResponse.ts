import {
	getLocaleFromAcceptLanguage,
	type MainPageLocale,
} from './locale';

export const localizedResponse = <T>(
	request: Request,
	dataByLocale: Record<MainPageLocale, T>,
) => {
	const locale = getLocaleFromAcceptLanguage(
		request.headers.get('accept-language'),
	);

	return Response.json(dataByLocale[locale], {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Content-Language': locale,
			Vary: 'Accept-Language',
		},
	});
};
