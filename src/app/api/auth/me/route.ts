import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import {
	ACCESS_TOKEN_COOKIE,
	clearAuthCookies,
	REFRESH_TOKEN_COOKIE,
	setAuthCookies,
	type AuthTokens,
} from '@/shared/api/server/auth/cookies';
import { refreshViaUpstream } from '@/shared/api/server/auth/upstreamAuthClient';

const API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;

export const dynamic = 'force-dynamic';

const fetchUpstreamMe = (accessToken: string) => {
	if (!API_URL) {
		throw new Error('API_URL is not configured');
	}

	return fetch(new URL('/api/mockBackend/auth/me', API_URL), {
		cache: 'no-store',
		headers: {
			'Accept': 'application/json',
			'Authorization': `Bearer ${accessToken}`,
		},
	});
};

const createMeResponse = (
	upstreamResponse: Response,
	tokensToPersist?: AuthTokens | null,
) => {
	const response = new NextResponse(upstreamResponse.body, {
		headers: {
			'Content-Type':
				upstreamResponse.headers.get('content-type') ?? 'application/json',
		},
		status: upstreamResponse.status,
	});

	if (tokensToPersist) {
		setAuthCookies(response, tokensToPersist);
	}

	return response;
};

export const GET = async () => {
	const cookieStore = await cookies();
	const refreshToken = cookieStore.get(REFRESH_TOKEN_COOKIE)?.value;
	let accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
	let tokensToPersist: AuthTokens | null = null;

	if (!accessToken && refreshToken) {
		tokensToPersist = await refreshViaUpstream(refreshToken);
		accessToken = tokensToPersist?.accessToken;
	}

	if (!accessToken) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	let upstreamResponse = await fetchUpstreamMe(accessToken);

	if (upstreamResponse.status === 401 && refreshToken) {
		tokensToPersist = await refreshViaUpstream(refreshToken);

		if (tokensToPersist) {
			upstreamResponse = await fetchUpstreamMe(tokensToPersist.accessToken);
		}
	}

	const response = createMeResponse(upstreamResponse, tokensToPersist);

	if (upstreamResponse.status === 401 && refreshToken && !tokensToPersist) {
		clearAuthCookies(response);
	}

	return response;
};
