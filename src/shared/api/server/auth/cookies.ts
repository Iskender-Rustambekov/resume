import 'server-only';

import type { NextResponse } from 'next/server';

export const ACCESS_TOKEN_COOKIE = 'accessToken';
export const REFRESH_TOKEN_COOKIE = 'refreshToken';

const isProduction = process.env.NODE_ENV === 'production';

const authCookieOptions = {
	httpOnly: true,
	path: '/',
	sameSite: 'lax' as const,
	secure: isProduction,
};

export interface AuthTokens {
	accessToken: string;
	refreshToken: string;
}

export const setAuthCookies = (response: NextResponse, tokens: AuthTokens) => {
	response.cookies.set(ACCESS_TOKEN_COOKIE, tokens.accessToken, {
		...authCookieOptions,
		maxAge: 60 * 15,
	});

	response.cookies.set(REFRESH_TOKEN_COOKIE, tokens.refreshToken, {
		...authCookieOptions,
		maxAge: 60 * 60 * 24 * 7,
	});
};

export const clearAuthCookies = (response: NextResponse) => {
	response.cookies.set(ACCESS_TOKEN_COOKIE, '', {
		...authCookieOptions,
		maxAge: 0,
	});

	response.cookies.set(REFRESH_TOKEN_COOKIE, '', {
		...authCookieOptions,
		maxAge: 0,
	});
};
