---
name: next-fsd-maintainer
description: Maintain this profile project's Next.js App Router + TypeScript + Feature-Sliced Design architecture. Use when changing app routes, layouts, providers, views, widgets, features, entities, shared modules, imports, API route placement, server/client component boundaries, or when reviewing architecture in this repository.
---

# Next FSD Maintainer

## Project Shape

Work inside a Next.js App Router application using TypeScript, Tailwind, shadcn, Vitest, Orval, and Feature-Sliced Design.

Keep the layer order:

```text
src/app -> src/views -> src/widgets -> src/features -> src/entities -> src/shared
```

Prefer the lowest valid layer for new code. Keep `src/app` thin: routing, layouts, providers, metadata, and route handlers only. Put page composition in `src/views`, large reusable page blocks in `src/widgets`, user actions in `src/features`, domain UI/model in `src/entities`, and infrastructure/reusable UI/config/utils in `src/shared`.

## Architecture Rules

- Use public API imports through slice `index.ts` for `views`, `widgets`, `features`, and `entities`.
- Do not deep import across FSD slices, such as `@/features/x/internal/file`.
- Avoid cross-feature imports. Move shared behavior to `entities` or `shared` when needed.
- Keep `shared` independent from `views`, `widgets`, `features`, and `entities`.
- Keep business logic out of `src/app` pages, layouts, and route files.
- Do not edit generated API files in `src/shared/api/generated` by hand.
- Preserve existing aliases, naming style, and file organization unless the task requires a move.

## React And Next.js

- Prefer Server Components by default.
- Add `"use client"` only for browser APIs, React state/effects, event handlers, animation libraries, or client-only providers.
- Keep server-only code out of Client Components.
- Pass serializable data through server/client boundaries.
- Keep providers isolated under `src/app/_providers` unless a narrower scope is clearly better.

## Next.js Docs Lookup

For Next.js-specific work, read the relevant local docs in `node_modules/next/dist/docs/` before coding. Prioritize local docs for routing, layouts, metadata, data fetching, route handlers, Server Actions, caching, hydration errors, Suspense boundaries, image/font/script optimization, runtime selection, and any Next.js 16 API detail.

Do not rely on memory when the task depends on current Next.js behavior.

## React Performance Defaults

- Keep components server-rendered unless interactivity requires a Client Component.
- Fetch data as high as practical on the server and pass serializable props down.
- Avoid data waterfalls by starting independent async work together.
- Do not add state or effects for values that can be derived during render.
- Use `memo`, `useMemo`, and `useCallback` only for measured or obvious render stability needs.
- Watch bundle size when adding client-only libraries or moving code behind `"use client"`.
- Treat hydration mismatches as architecture bugs, not cosmetic warnings.

## Change Workflow

1. Inspect the nearest existing slice and its `index.ts` before adding files.
2. Place new files in the smallest fitting layer and slice.
3. Export intended public API from the slice root.
4. Update imports to use `@/...` public API paths.
5. Run the narrowest relevant validation, usually `pnpm lint` and `pnpm typecheck`.

## API Contract Notes

When changing portfolio API shape, update the source schema or route/data source first, then run `pnpm api:gen`. Treat generated files as output, not source.
