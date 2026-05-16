import 'server-only';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getLocale } from 'next-intl/server';

import {
	ACCESS_TOKEN_COOKIE,
	REFRESH_TOKEN_COOKIE,
} from './auth/cookies';
import { refreshViaUpstream } from './auth/upstreamAuthClient';
import { parseResponse } from '../transport/parseResponse';

const API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;
const LOGIN_PATH = '/login';

type ServerApiAuthMode = 'optional' | 'required';

type ServerApiOptions = RequestInit & {
	auth?: ServerApiAuthMode;
};

const redirectToLogin = (locale: string) => {
	if (locale === 'en') {
		redirect(LOGIN_PATH);
	}

	redirect(`/${locale}${LOGIN_PATH}`);
};

export const serverApi = async <T>(
	path: string,
	options: ServerApiOptions = {},
): Promise<T> => {
	if (!API_URL) {
		throw new Error('API_URL is not configured');
	}

	const { auth = 'optional', ...requestOptions } = options;
	const [cookieStore, locale] = await Promise.all([cookies(), getLocale()]);
	const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
	const refreshToken = cookieStore.get(REFRESH_TOKEN_COOKIE)?.value;
	const headers = new Headers(requestOptions.headers);

	headers.set('Accept', 'application/json');
	headers.set('Accept-Language', locale);

	if (accessToken) {
		headers.set('Authorization', `Bearer ${accessToken}`);
	} else if (refreshToken) {
		const refreshedTokens = await refreshViaUpstream(refreshToken, locale);

		if (refreshedTokens) {
			headers.set('Authorization', `Bearer ${refreshedTokens.accessToken}`);
		} else if (auth === 'required') {
			redirectToLogin(locale);
		}
	} else if (auth === 'required') {
		redirectToLogin(locale);
	}

	if (requestOptions.body && !(requestOptions.body instanceof FormData)) {
		headers.set('Content-Type', 'application/json');
	}

	let response = await fetch(`${API_URL}${path}`, {
		...requestOptions,
		headers,
		cache: requestOptions.cache ?? 'no-store',
	});

	if (response.status === 401 && refreshToken) {
		const refreshedTokens = await refreshViaUpstream(refreshToken, locale);

		if (refreshedTokens) {
			headers.set('Authorization', `Bearer ${refreshedTokens.accessToken}`);
			response = await fetch(`${API_URL}${path}`, {
				...requestOptions,
				headers,
				cache: requestOptions.cache ?? 'no-store',
			});
		} else if (auth === 'required') {
			redirectToLogin(locale);
		}
	}

	if (response.status === 401 && auth === 'required') {
		redirectToLogin(locale);
	}

	if (!response.ok) {
		throw new Error(`API error: ${response.status}`);
	}

	return parseResponse<T>(response);
};
