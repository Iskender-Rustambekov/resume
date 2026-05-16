import { NextResponse, type NextRequest } from 'next/server';

import { resolveRequestLocale } from '@/shared/api/server/i18n/locale';

import {
	demoUser,
	issueMockBackendTokenPair,
} from '../_lib/tokenService';

export const dynamic = 'force-dynamic';

type LoginBody = {
	email?: string;
	password?: string;
};

export const POST = async (request: NextRequest) => {
	const body = (await request.json().catch(() => ({}))) as LoginBody;

	if (body.email !== demoUser.email || body.password !== 'demo-password') {
		return NextResponse.json(
			{ message: 'Invalid credentials' },
			{ status: 401 },
		);
	}

	const locale = resolveRequestLocale(request.headers.get('accept-language'));

	return NextResponse.json({
		tokens: issueMockBackendTokenPair(demoUser, locale),
		user: {
			id: demoUser.id,
			email: demoUser.email,
			name: demoUser.name,
			scope: demoUser.scope,
		},
	});
};
