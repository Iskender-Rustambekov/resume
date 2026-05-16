---
name: profile-testing-quality
description: Add, update, or review tests and validation for this profile project. Use when writing Vitest or Testing Library tests, fixing regressions, checking lint/type errors, validating Feature-Sliced Design boundaries, reviewing code quality, or deciding which project checks to run after changes.
---

# Profile Testing Quality

## Test Stack

Use Vitest, Testing Library, jsdom, ESLint, and TypeScript.

Project commands:

```text
pnpm lint
pnpm typecheck
pnpm test
pnpm test:run
pnpm test:coverage
```

Prefer focused validation while iterating, then broader validation before finishing risky changes.

## What To Test

- Test pure utilities directly, like `src/shared/utils/**`.
- Test stores and state transitions without coupling to implementation details.
- Test interactive UI through user-visible behavior with Testing Library.
- Test Server Component composition sparingly; prefer testing extracted logic or client interactions.
- Add regression tests for bugs that can realistically reappear.
- Avoid snapshot tests unless they protect stable structured output.

## Test Placement

- Put tests near the unit under test using the existing `*.test.ts` or `*.test.tsx` pattern.
- Keep test helpers in the lowest shared location that does not violate FSD boundaries.
- Do not import private files from another FSD slice just to test behavior.

## Quality Checks

Use this order when relevant:

1. Run targeted tests for changed code.
2. Run `pnpm lint` for import rules, FSD boundaries, and code style.
3. Run `pnpm typecheck` for server/client and generated API type issues.
4. Run `pnpm test:run` before finishing broad behavior changes.
5. Run `pnpm test:coverage` only when coverage is part of the task.

## Review Priorities

When reviewing changes, lead with:

- Broken FSD imports or misplaced logic.
- Server/client component boundary mistakes.
- Generated files edited manually.
- Missing tests for changed behavior.
- Overly broad abstractions or duplicated logic that will make later changes brittle.

Keep fixes small and aligned with the existing project style.
