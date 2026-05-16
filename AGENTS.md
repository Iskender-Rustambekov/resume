# AGENTS.md

## Project

Next.js App Router + TypeScript + FSD + Tailwind + shadcn.

<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated; the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

## Commands

- Install: `pnpm install`
- Dev: `pnpm dev`
- Lint: `pnpm lint`
- Test: `pnpm test`
- Typecheck: `pnpm typecheck`
- Generate API: `pnpm api:gen`
- Generate icons: `pnpm icons:gen`

## Architecture

Follow FSD:

- `src/app` - routing, layouts, providers, API routes only.
- `src/views` - page-level composition.
- `src/widgets` - large reusable page blocks.
- `src/features` - user-facing actions and interactions.
- `src/entities` - domain entities.
- `src/shared` - reusable infrastructure, UI, config, utils, API.

Rules:

- Pages and layouts must stay thin.
- No business logic inside app routes/pages.
- Use public API imports through slice `index.ts`.
- Avoid cross-feature imports.
- `shared` must not import from `features`, `entities`, `widgets`, or `views`.
- Prefer moving logic down to the lowest valid FSD layer.

## React / Next.js

- Prefer Server Components by default.
- Use Client Components only for interactivity, browser APIs, state, effects, or animation.
- Do not put server-only code in client components.
- Be careful with hydration boundaries.
- Keep providers isolated in `src/app/_providers`.

## API

- OpenAPI schema lives in `src/shared/api/schemas`.
- Orval config lives in `orval.config.cjs`.
- Generated files in `src/shared/api/generated` must not be edited manually.
- Change the schema/source route first, then run `pnpm api:gen`.

## UI

- Use existing shared UI and shadcn components before adding new primitives.
- Keep components small and named by purpose.
- Prefer Tailwind utilities for layout and tokens; use CSS modules for complex local styles/animations.
- Keep responsive behavior explicit.

## Tests and validation

After meaningful changes, run the relevant checks:

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`

For API contract changes, also run:

- `pnpm api:gen`

## Code style

- Small components.
- Clear names.
- Name project files and folders in camelCase without hyphens, e.g. `orvalInstance.ts`.
- Route/page segment names that define public URLs may use kebab-case when it makes the URL clearer.
- No overengineering.
- Comments in English.
- Add comments only when they explain non-obvious logic.
