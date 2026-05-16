import { NextResponse, type NextRequest } from 'next/server';

import { setAuthCookies } from '@/shared/api/server/auth/cookies';
import { loginViaUpstream } from '@/shared/api/server/auth/upstreamAuthClient';

export const dynamic = 'force-dynamic';

interface LoginBody {
	email?: string;
	password?: string;
}

export const POST = async (request: NextRequest) => {
	const body = (await request.json().catch(() => ({}))) as LoginBody;
	const upstreamSession = await loginViaUpstream(body.email, body.password);

	if (!upstreamSession) {
		return NextResponse.json(
			{ message: 'Invalid credentials' },
			{ status: 401 },
		);
	}

	const response = NextResponse.json({
		user: upstreamSession.user,
	});

	setAuthCookies(response, upstreamSession.tokens);

	return response;
};
