import { NextResponse, type NextRequest } from 'next/server';

import {
	clearAuthCookies,
	REFRESH_TOKEN_COOKIE,
	setAuthCookies,
} from '@/shared/api/server/auth/cookies';
import { refreshViaUpstream } from '@/shared/api/server/auth/upstreamAuthClient';

export const dynamic = 'force-dynamic';

export const POST = async (request: NextRequest) => {
	const refreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;

	if (!refreshToken) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	const tokens = await refreshViaUpstream(refreshToken);

	if (!tokens) {
		const response = NextResponse.json(
			{ message: 'Unauthorized' },
			{ status: 401 },
		);

		clearAuthCookies(response);

		return response;
	}

	const response = NextResponse.json({ ok: true });

	setAuthCookies(response, tokens);

	return response;
};
