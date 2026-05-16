import { NextResponse, type NextRequest } from 'next/server';

import { verifyMockBackendAccessToken } from '../_lib/tokenService';

export const dynamic = 'force-dynamic';

export const GET = (request: NextRequest) => {
	const authorization = request.headers.get('authorization');
	const token = authorization?.startsWith('Bearer ')
		? authorization.slice('Bearer '.length)
		: undefined;
	const payload = verifyMockBackendAccessToken(token);

	if (!payload) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	return NextResponse.json({
		user: {
			id: payload.sub,
			scope: payload.scope ?? [],
		},
	});
};
