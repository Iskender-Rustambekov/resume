import { NextResponse, type NextRequest } from 'next/server';

import { resolveRequestLocale } from '@/shared/api/server/i18n/locale';

import { refreshMockBackendTokenPair } from '../_lib/tokenService';

export const dynamic = 'force-dynamic';

type RefreshBody = {
	refreshToken?: string;
};

export const POST = async (request: NextRequest) => {
	const body = (await request.json().catch(() => ({}))) as RefreshBody;

	if (!body.refreshToken) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	const locale = resolveRequestLocale(request.headers.get('accept-language'));
	const tokens = refreshMockBackendTokenPair(body.refreshToken, locale);

	if (!tokens) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	return NextResponse.json({ tokens });
};
