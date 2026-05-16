import 'server-only';

import { createMockJwt, verifyMockJwt } from './jwt';

const ACCESS_TOKEN_TTL_SECONDS = 60 * 15;
const REFRESH_TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7;

export interface MockBackendUser {
	id: string;
	email: string;
	name: string;
	scope: string[];
}

export interface MockBackendTokens {
	accessToken: string;
	refreshToken: string;
}

export const demoUser: MockBackendUser = {
	id: 'profile-owner',
	email: 'demo@example.com',
	name: 'Demo User',
	scope: ['portfolio:read'],
};

export const issueMockBackendTokenPair = (
	user: MockBackendUser = demoUser,
	locale?: string,
): MockBackendTokens => ({
	accessToken: createMockJwt(
		{
			sub: user.id,
			type: 'access',
			scope: user.scope,
			locale,
		},
		ACCESS_TOKEN_TTL_SECONDS,
	),
	refreshToken: createMockJwt(
		{
			sub: user.id,
			type: 'refresh',
			scope: user.scope,
			locale,
		},
		REFRESH_TOKEN_TTL_SECONDS,
	),
});

export const refreshMockBackendTokenPair = (
	refreshToken: string,
	locale?: string,
) => {
	const payload = verifyMockJwt(refreshToken, 'refresh');

	if (!payload) {
		return null;
	}

	return issueMockBackendTokenPair(
		{
			...demoUser,
			id: payload.sub,
			scope: payload.scope ?? demoUser.scope,
		},
		locale ?? payload.locale,
	);
};

export const verifyMockBackendAccessToken = (accessToken?: string) => {
	if (!accessToken) {
		return null;
	}

	return verifyMockJwt(accessToken, 'access');
};
