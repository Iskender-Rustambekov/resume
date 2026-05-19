---
name: profile-ui-motion
description: Work on the profile portfolio UI, responsive layout, visual polish, Tailwind/CSS module styling, shadcn components, GSAP or motion behavior, and interactive visual components. Use when editing main page sections, shared UI components, animations, themes, icons, layout, mobile behavior, or hydration-sensitive UI in this repository.
---

# Profile UI Motion

## Design Approach

- Build the usable portfolio experience directly; avoid marketing-only filler.
- Match existing visual language before introducing new patterns.
- Prefer shared UI or shadcn primitives before adding new component primitives.
- Use Tailwind for layout, spacing, and token-driven styling.
- Use CSS modules for complex local styles, animation-specific selectors, and effects that would be noisy in JSX.
- Keep components small and named by purpose.
- Keep text responsive without viewport-based font scaling.
- Avoid nested cards and decorative one-note palettes.

## Motion And Interactivity

- Keep animation code behind Client Components.
- Keep static section markup server-renderable when possible.
- Prefer existing motion helpers and data attributes over inventing a second animation system.
- Use GSAP/client effects only where the interaction needs browser layout, scrolling, or runtime measurement.
- Clean up timelines, listeners, observers, and animation contexts in effects.
- Keep reduced-motion and hydration risk in mind when adding scroll or mount animations.

## Responsive Checks

Before finishing meaningful UI work:

1. Check desktop and mobile layout.
2. Verify text does not overlap or overflow buttons/cards/sections.
3. Verify interactive controls remain reachable and visually stable.
4. Run `pnpm lint` and `pnpm typecheck` when code changed.
5. Use the in-app browser for visual verification when a dev server is available.

## Assets And Icons

- Use existing assets in `src/shared/assets` when they fit.
- Use the existing icon system before adding new icon dependencies.
- If generated icon exports need updating, run `pnpm icons:gen`.
