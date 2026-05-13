This is a [Next.js](https://nextjs.org) profile project.

## Getting Started

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Contract

The OpenAPI document is available at:

```text
http://localhost:3000/api/openapi
```

It describes the profile content API routes:

```text
GET /api/main-page/projects
GET /api/main-page/process-steps
GET /api/main-page/work-experience
GET /api/main-page/contact-links
```

Generate a typed client with Orval:

```bash
pnpm dev
pnpm dlx orval --config orval.config.cjs
```

Generated files are configured to land in:

```text
src/shared/api/generated
```
