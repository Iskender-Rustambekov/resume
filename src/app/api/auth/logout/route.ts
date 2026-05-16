import { NextResponse } from 'next/server';

import { clearAuthCookies } from '@/shared/api/server/auth/cookies';

export const dynamic = 'force-dynamic';

export const POST = () => {
	const response = NextResponse.json({ ok: true });

	clearAuthCookies(response);

	return response;
};
