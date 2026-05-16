# Mock Backend

This folder simulates responsibilities that belong to a real backend/auth
service in production. Route Handlers are public endpoints, so this namespace is
for portfolio/demo use only.

The Next.js BFF should not issue or sign JWTs when a dedicated backend exists.
In production, replace calls to these routes with external upstream endpoints:

- `POST /auth/login`
- `POST /auth/refresh`
- `GET /auth/me`

The production-facing Next.js responsibilities are:

- store backend-issued tokens in `httpOnly` cookies;
- attach `Authorization: Bearer <accessToken>` to upstream requests;
- call upstream refresh when access expires;
- clear cookies and redirect/return `401` when refresh fails.
