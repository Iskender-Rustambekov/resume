import { ROUTES } from '@/shared/config/routes/config';

import { parseResponse } from '../transport/parseResponse';

const API_URL = '/api/bff';
const DIRECT_API_PATHS = ['/api/auth/'];

export class ApiError extends Error {
	constructor(
		public response: Response,
		public payload?: unknown,
	) {
		super(`API error: ${response.status}`);
		this.name = 'ApiError';
	}
}

const getLocalizedLoginPath = () => {
	const locale = document.documentElement.lang;

	if (!locale || locale === 'en') {
		return ROUTES.login;
	}

	return `/${locale}${ROUTES.login}`;
};

const redirectToLogin = () => {
	if (typeof window === 'undefined') {
		return;
	}

	const loginPath = getLocalizedLoginPath();

	if (window.location.pathname === loginPath) {
		return;
	}

	window.location.assign(loginPath);
};

export const portfolioCustomInstance = async <T>(
	url: string,
	options: RequestInit = {},
): Promise<T> => {
	const headers = new Headers(options.headers);

	headers.set('Accept', 'application/json');

	if (typeof document !== 'undefined') {
		headers.set('Accept-Language', document.documentElement.lang);
	}

	if (options.body && !(options.body instanceof FormData)) {
		headers.set('Content-Type', 'application/json');
	}

	const shouldUseDirectApi = DIRECT_API_PATHS.some((path) =>
		url.startsWith(path),
	);
	const requestUrl = shouldUseDirectApi ? url : `${API_URL}${url}`;

	const response = await fetch(requestUrl, {
		...options,
		headers,
	});

	if (!response.ok) {
		const payload = await parseResponse(response);

		if (response.status === 401) {
			redirectToLogin();
		}

		throw new ApiError(response, payload);
	}

	return parseResponse<T>(response);
};

export type ErrorType<_Error> = ApiError;
export type BodyType<BodyData> = BodyData;
