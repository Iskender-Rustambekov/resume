import 'server-only';

import { headers } from 'next/headers';

import { parseResponse } from '../../transport/parseResponse';
import { resolveRequestLocale } from '../i18n/locale';

import type { AuthTokens } from './cookies';

const API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;

export interface UpstreamUser {
	id: string;
	email?: string;
	name?: string;
	scope: string[];
}

type UpstreamLoginResponse = {
	tokens: AuthTokens;
	user: UpstreamUser;
};

type UpstreamRefreshResponse = {
	tokens: AuthTokens;
};

const getUpstreamUrl = (path: string) => {
	if (!API_URL) {
		throw new Error('API_URL is not configured');
	}

	return new URL(path, API_URL);
};

const getAcceptLanguage = async () => {
	const headerStore = await headers();

	return resolveRequestLocale(headerStore.get('accept-language'));
};

export const loginViaUpstream = async (
	email?: string,
	password?: string,
): Promise<UpstreamLoginResponse | null> => {
	const response = await fetch(getUpstreamUrl('/api/mockBackend/auth/login'), {
		body: JSON.stringify({ email, password }),
		cache: 'no-store',
		headers: {
			'Accept': 'application/json',
			'Accept-Language': await getAcceptLanguage(),
			'Content-Type': 'application/json',
		},
		method: 'POST',
	});

	if (!response.ok) {
		return null;
	}

	return parseResponse<UpstreamLoginResponse>(response);
};

export const refreshViaUpstream = async (
	refreshToken: string,
	locale?: string,
): Promise<AuthTokens | null> => {
	const response = await fetch(
		getUpstreamUrl('/api/mockBackend/auth/refresh'),
		{
			body: JSON.stringify({ refreshToken }),
			cache: 'no-store',
			headers: {
				'Accept': 'application/json',
				'Accept-Language': locale ?? (await getAcceptLanguage()),
				'Content-Type': 'application/json',
			},
			method: 'POST',
		},
	);

	if (!response.ok) {
		return null;
	}

	const payload = await parseResponse<UpstreamRefreshResponse>(response);

	return payload.tokens;
};
