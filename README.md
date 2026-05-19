# Profile

Personal profile and portfolio built with **Next.js App Router**, **TypeScript**, **Feature-Sliced Design**, **Tailwind CSS**, **shadcn**, **next-intl**, **React Query**, **GSAP**, **Vitest**, and **Orval**.

## Quick Start

```bash
pnpm install
cp .env.example .env
pnpm dev
```

App URL: [http://localhost:3000](http://localhost:3000)

Locales: `en` by default, `ru` via URL prefix. i18n setup lives in `src/shared/lib/i18n`.

## Scripts

| Command              | Purpose                                       |
| -------------------- | --------------------------------------------- |
| `pnpm dev`           | Start the development server                  |
| `pnpm build`         | Build for production                          |
| `pnpm start`         | Start the production build                    |
| `pnpm lint`          | Run ESLint                                    |
| `pnpm test`          | Run Vitest in watch mode                      |
| `pnpm test:run`      | Run tests once                                |
| `pnpm test:coverage` | Run tests with coverage                       |
| `pnpm api:gen`       | Generate API clients from OpenAPI             |
| `pnpm icons:gen`     | Generate icons from `src/shared/assets/icons` |
| `pnpm resume:html`   | Generate the HTML resume                      |
| `pnpm resume:pdf`    | Export the PDF resume                         |

## Environment

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
API_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

- `NEXT_PUBLIC_API_URL` — public origin for client-side API requests.
- `API_URL` — server-side origin for BFF and server API calls.
- `NEXT_PUBLIC_SITE_URL` — absolute site URL for SEO, sitemap, and canonical links.

## Architecture

The project follows **Feature-Sliced Design**.

```text
src/app      routing, layouts, providers, route handlers
src/views    page-level composition
src/widgets  large reusable page blocks
src/features user actions and interactive flows
src/entities domain models and UI
src/shared   UI kit, API, config, lib, utils, styles, assets
```

Rules:

- Keep `src/app` thin: routes, layouts, metadata, providers, API routes.
- Put business logic in the lowest valid FSD layer.
- Import slices through their public `index.ts`.
- Avoid deep imports between FSD slices.
- `shared` must not import from `views`, `widgets`, `features`, or `entities`.
- Prefer Server Components by default.
- Add `"use client"` only for state/effects, browser APIs, events, animations, or client providers.

## API

OpenAPI document:

```text
GET /api/openapi
```

Main public endpoints:

```text
GET /api/main-page/projects
GET /api/main-page/process-steps
GET /api/main-page/work-experience
GET /api/main-page/contact-links
```

API localization is controlled with `Accept-Language: en | ru`; responses include `Content-Language`.

Contract source:

```text
src/shared/api/schemas/portfolioSchema.yaml
```

Generate clients:

```bash
pnpm api:gen
```

Generated code lives in `src/shared/api/generated`.

## BFF and Auth

`/api/bff/[...path]` proxies only paths that start with `/api/` to `API_URL`.

The BFF:

- forwards `Accept-Language`;
- adds `Authorization` from HTTP-only cookies;
- refreshes the access token with the refresh token;
- clears auth cookies after a failed refresh.

Local mock auth backend lives in `src/app/api/mockBackend`.

## UI and Styles

- Shared shadcn components: `src/shared/ui/shadcn`.
- Project UI components: `src/shared/ui/components`.
- Global styles and tokens: `src/shared/styles`.
- Complex local animations can live in CSS Modules next to the component.
- GSAP helpers live in `src/shared/lib/gsap`.

## Tests

Stack: **Vitest**, **Testing Library**, **jsdom**.

```bash
pnpm test:run
pnpm test:coverage
```

Tests live next to the code as `*.test.ts` and `*.test.tsx`.

## Docker

```bash
cp .env.example .env
docker compose up --build
```

Docker starts a temporary mock backend only during the image build so Next.js can
prerender pages. The running container uses your local `.env`.

The container builds the standalone Next.js output and serves the app on port `3000`.
