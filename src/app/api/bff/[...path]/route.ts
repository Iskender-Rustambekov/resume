import { NextResponse, type NextRequest } from 'next/server';

import {
	ACCESS_TOKEN_COOKIE,
	clearAuthCookies,
	REFRESH_TOKEN_COOKIE,
	setAuthCookies,
	type AuthTokens,
} from '@/shared/api/server/auth/cookies';
import { refreshViaUpstream } from '@/shared/api/server/auth/upstreamAuthClient';
import { resolveRequestLocale } from '@/shared/api/server/i18n/locale';

export const dynamic = 'force-dynamic';

const API_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;

type BffRouteContext = {
	params: Promise<{
		path: string[];
	}>;
};

const createUpstreamHeaders = (
	request: NextRequest,
	locale: string,
	accessToken?: string,
) => {
	const headers = new Headers(request.headers);

	headers.delete('authorization');
	headers.delete('cookie');
	headers.delete('content-length');
	headers.delete('host');
	headers.set('Accept', headers.get('Accept') ?? 'application/json');
	headers.set('Accept-Language', locale);

	if (accessToken) {
		headers.set('Authorization', `Bearer ${accessToken}`);
	}

	return headers;
};

const proxyWithAuth = async (
	request: NextRequest,
	upstreamUrl: URL,
	locale: string,
	accessToken?: string,
) => {
	const headers = createUpstreamHeaders(request, locale, accessToken);

	return fetch(upstreamUrl, {
		body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
		cache: 'no-store',
		duplex: 'half',
		headers,
		method: request.method,
	} as RequestInit);
};

const createProxyResponse = async (
	upstreamResponse: Response,
	tokensToPersist?: AuthTokens | null,
) => {
	const responseHeaders = new Headers();

	for (const headerName of ['content-type', 'content-language', 'vary']) {
		const headerValue = upstreamResponse.headers.get(headerName);

		if (headerValue) {
			responseHeaders.set(headerName, headerValue);
		}
	}

	const response = new NextResponse(upstreamResponse.body, {
		headers: responseHeaders,
		status: upstreamResponse.status,
		statusText: upstreamResponse.statusText,
	});

	if (tokensToPersist) {
		setAuthCookies(response, tokensToPersist);
	}

	return response;
};

const handleBffRequest = async (
	request: NextRequest,
	{ params }: BffRouteContext,
) => {
	if (!API_URL) {
		return NextResponse.json(
			{ message: 'API_URL is not configured' },
			{ status: 500 },
		);
	}

	const { path } = await params;
	const upstreamPath = `/${path.join('/')}`;

	if (!upstreamPath.startsWith('/api/')) {
		return NextResponse.json(
			{ message: 'BFF can proxy only API paths' },
			{ status: 400 },
		);
	}

	const upstreamUrl = new URL(upstreamPath, API_URL);
	upstreamUrl.search = request.nextUrl.search;

	const locale = resolveRequestLocale(request.headers.get('accept-language'));
	const refreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;
	const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
	let tokensToPersist: AuthTokens | null = null;
	let activeAccessToken = accessToken;

	if (!activeAccessToken && refreshToken) {
		tokensToPersist = await refreshViaUpstream(refreshToken, locale);
		activeAccessToken = tokensToPersist?.accessToken;
	}

	let upstreamResponse = await proxyWithAuth(
		request,
		upstreamUrl,
		locale,
		activeAccessToken,
	);

	if (upstreamResponse.status === 401 && refreshToken) {
		tokensToPersist = await refreshViaUpstream(refreshToken, locale);
		activeAccessToken = tokensToPersist?.accessToken;

		if (activeAccessToken) {
			upstreamResponse = await proxyWithAuth(
				request,
				upstreamUrl,
				locale,
				activeAccessToken,
			);
		}
	}

	const response = await createProxyResponse(upstreamResponse, tokensToPersist);

	if (upstreamResponse.status === 401 && refreshToken && !tokensToPersist) {
		clearAuthCookies(response);
	}

	return response;
};

export const GET = handleBffRequest;
export const POST = handleBffRequest;
export const PUT = handleBffRequest;
export const PATCH = handleBffRequest;
export const DELETE = handleBffRequest;
