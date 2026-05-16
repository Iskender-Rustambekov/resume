import 'server-only';

import { createHmac, timingSafeEqual } from 'node:crypto';

export interface MockJwtPayload {
	exp: number;
	iat: number;
	sub: string;
	type: 'access' | 'refresh';
	locale?: string;
	scope?: string[];
}

const JWT_SECRET =
	process.env.MOCK_BACKEND_JWT_SECRET ??
	'profile-dev-only-jwt-secret-change-in-production';

const base64UrlEncode = (input: string | Buffer) =>
	Buffer.from(input).toString('base64url');

const base64UrlDecode = (input: string) =>
	Buffer.from(input, 'base64url').toString('utf8');

const sign = (value: string) =>
	createHmac('sha256', JWT_SECRET).update(value).digest('base64url');

export const createMockJwt = (
	payload: Omit<MockJwtPayload, 'exp' | 'iat'>,
	expiresInSeconds: number,
) => {
	const now = Math.floor(Date.now() / 1000);
	const header = base64UrlEncode(
		JSON.stringify({ alg: 'HS256', typ: 'JWT' }),
	);
	const body = base64UrlEncode(
		JSON.stringify({
			...payload,
			iat: now,
			exp: now + expiresInSeconds,
		}),
	);
	const unsignedToken = `${header}.${body}`;

	return `${unsignedToken}.${sign(unsignedToken)}`;
};

export const verifyMockJwt = (
	token: string,
	type?: MockJwtPayload['type'],
) => {
	const [header, body, signature] = token.split('.');

	if (!header || !body || !signature) {
		return null;
	}

	const unsignedToken = `${header}.${body}`;
	const expectedSignature = sign(unsignedToken);
	const signatureBuffer = Buffer.from(signature);
	const expectedBuffer = Buffer.from(expectedSignature);

	if (
		signatureBuffer.length !== expectedBuffer.length ||
		!timingSafeEqual(signatureBuffer, expectedBuffer)
	) {
		return null;
	}

	const payload = JSON.parse(base64UrlDecode(body)) as MockJwtPayload;
	const now = Math.floor(Date.now() / 1000);

	if (payload.exp <= now || (type && payload.type !== type)) {
		return null;
	}

	return payload;
};
