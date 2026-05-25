# syntax=docker/dockerfile:1.7

# ---------- deps: install npm packages once, reuse across stages ----------
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- dev: hot-reload Next.js on :3000 (source bind-mounted by compose) ----------
FROM node:20-alpine AS dev
WORKDIR /app
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npx", "next", "dev", "-H", "0.0.0.0", "-p", "3000"]

# ---------- builder: source + deps, run `npm run build` on demand ----------
# Used by `docker compose run --rm build` to populate the host's ./out via bind mount.
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
CMD ["npm", "run", "build"]

# ---------- exporter: bake the static export into the image ----------
# Used by the `preview` stage and by CI's --target export.
FROM builder AS exporter
RUN npm run build

# ---------- preview: nginx serving the baked static site on :8080 ----------
FROM nginx:alpine AS preview
COPY --from=exporter /app/out /usr/share/nginx/html
RUN sed -i 's/listen       80;/listen       8080;/' /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

# ---------- export: scratch stage for `docker buildx build --output type=local` ----------
# CI uses this to extract the static site to ./out without running a container.
FROM scratch AS export
COPY --from=exporter /app/out /
