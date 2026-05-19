# syntax=docker/dockerfile:1.7

FROM node:22-slim AS base

ENV NEXT_TELEMETRY_DISABLED=1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@11.1.1 --activate

FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder

ARG API_URL
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SITE_URL
ARG USE_DOCKER_BUILD_MOCK_BACKEND=false

ENV API_URL=$API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Docker build only: this temporary mock backend serves local portfolio API data
# during Next.js prerendering. It is not copied to or started in the runtime image.
RUN if [ "$USE_DOCKER_BUILD_MOCK_BACKEND" = "true" ]; then \
		node node_modules/tsx/dist/cli.mjs scripts/dockerMockBackend.ts & \
		MOCK_BACKEND_PID=$!; \
		trap "kill $MOCK_BACKEND_PID" EXIT; \
		until node -e "fetch('http://127.0.0.1:3000/api/main-page/contact-links').then((r) => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"; do sleep 1; done; \
		API_URL=http://127.0.0.1:3000 pnpm build; \
	else \
		pnpm build; \
	fi

FROM node:22-slim AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

WORKDIR /app

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

RUN mkdir -p .next/cache && chown -R node:node .next public

USER node

EXPOSE 3000

CMD ["node", "server.js"]
