import axios, {
	type AxiosError,
	type AxiosInstance,
	type AxiosRequestConfig,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from 'axios';
import Cookies from 'js-cookie';

import { ROUTES } from '@/shared/config/routes/config';

import { type TAxiosErrorResponse } from './types';

/**
 * Matches backend OpenAPI: primary subtags only. Values read from LOCALE_COOKIE_NAME
 * are normalized to this set before being sent as Accept-Language.
 */
const SUPPORTED_LOCALES = ['en', 'ru'] as const;

type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

/**
 * Cookie where the app stores the active UI locale (e.g. "en", "ru", "en-US").
 * Change if your app uses another cookie name (e.g. next-intl often uses NEXT_LOCALE).
 */
export const LOCALE_COOKIE_NAME = 'locale';

declare module 'axios' {
	interface AxiosRequestConfig {
		/** Prevents infinite retry loops when refresh fails or returns 401 again. */
		_retry?: boolean;
	}
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const $api = axios.create({
	baseURL: apiUrl,
	timeout: 9000,
	headers: {
		'Content-Type': 'application/json',
	},
});

const getNormalizedLocaleFromCookie = (): string | undefined => {
	const raw = Cookies.get(LOCALE_COOKIE_NAME)?.trim().toLowerCase();
	if (!raw) {
		return undefined;
	}
	const primary = raw.split('-')[0];
	if (!SUPPORTED_LOCALES.includes(primary as SupportedLocale)) {
		return undefined;
	}
	return primary;
};

$api.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = Cookies.get('accessToken');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		const locale = getNormalizedLocaleFromCookie();
		if (locale) {
			config.headers['Accept-Language'] = locale;
		}

		return config;
	},
	(error: AxiosError) => Promise.reject(error),
);

$api.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config;
		const status = error.response?.status;

		if (
			!originalRequest ||
			(status !== 401 && status !== 403) ||
			originalRequest._retry === true
		) {
			return Promise.reject(error);
		}

		originalRequest._retry = true;
		return refreshToken($api, originalRequest);
	},
);

/** Orval mutator return type: cancellable promise resolving to response body. */
export type CancellablePromise<T> = Promise<T> & { cancel: () => void };

export const portfolioCustomInstance = <T>(
	config: AxiosRequestConfig,
	options?: AxiosRequestConfig,
): CancellablePromise<T> => {
	const controller = new AbortController();
	const promise = $api({
		...config,
		...options,
		signal: controller.signal,
	}).then((response) => response.data as T);

	return Object.assign(promise, {
		cancel: () => {
			controller.abort('Query was cancelled');
		},
	});
};

export type ErrorType<Error> = TAxiosErrorResponse<Error>;
export type BodyType<BodyData> = BodyData;

const refreshFetch = async (): Promise<string> => {
	const refresh = Cookies.get('refreshToken');
	if (!refresh) {
		redirectToLogin();
		throw new Error('Refresh token is required');
	}

	try {
		const { data } = await axios.post<{ access_token: string }>(
			`${apiUrl}/api/user/refresh`,
			{ refresh_token: refresh },
		);
		Cookies.set('accessToken', data.access_token);
		return data.access_token;
	} catch {
		redirectToLogin();
		throw new Error('Failed to refresh session');
	}
};

const clearAuthCookies = () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
};

export async function refreshToken(
	axiosInstance: AxiosInstance,
	originalRequest: AxiosRequestConfig,
): Promise<AxiosResponse> {
	try {
		await refreshFetch();
		return axiosInstance(originalRequest);
	} catch (error) {
		clearAuthCookies();
		return Promise.reject(error);
	}
}

function redirectToLogin(): void {
	if (typeof window === 'undefined') return;
	const path = window.location.pathname;
	if (path === ROUTES.login || path === ROUTES.registration) return;
	window.location.href = ROUTES.login;
}
