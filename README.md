# deepmaterials.github.io

Marketing site for **Deep Material** — thermal interface materials (gap pads,
thermal grease, liquid gap fillers, etc.). Built with [Next.js 14](https://nextjs.org)
(App Router) + Tailwind, statically exported, and published to GitHub Pages.

- **Live:** https://deepmaterials.github.io
- **Stack:** Next.js 14 · React 18 · TypeScript · Tailwind · framer-motion
- **Output:** `next build` with `output: 'export'` → static HTML in `./out`

---

## Quickstart (Docker — recommended)

The only requirement is [Docker Desktop](https://www.docker.com/products/docker-desktop/)
(or any Docker engine with Compose v2). Everyone gets the same Node version,
the same lockfile resolution, and the same build output as CI.

```bash
# 1. Dev server with hot reload — http://localhost:3000
docker compose up dev

# 2. Build the static site into ./out (same command CI runs)
docker compose run --rm build

# 3. Preview the built site exactly as GitHub Pages will serve it
#    http://localhost:8080
docker compose up preview
```

First run pulls the Node and nginx base images and installs dependencies
(~1–2 min). Subsequent runs are cached.

### Editing code

`docker compose up dev` bind-mounts the repo into the container, so edits in
[src/](src/) reload in the browser immediately. `node_modules` and `.next`
live inside the container (named volumes) so the host's architecture never
clashes with the container's — relevant on Apple Silicon.

If you add or remove a dependency, rebuild the dev image so the new
`package-lock.json` is baked in:

```bash
docker compose build dev
```

---

## Native Node (fallback, no Docker)

Requires **Node 20** (matches CI and the Docker image).

```bash
npm ci
npm run dev          # http://localhost:3000
npm run build        # writes ./out
npm run lint
```

---

## Deployment to production

```bash
npm run deploy
```

That's it. The script ([scripts/deploy.sh](scripts/deploy.sh)) verifies
you're on `main` with a clean working tree, pushes to `origin/main`, and
prints a link to the running deploy. The push triggers
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), which:

1. Builds the `export` stage of the [Dockerfile](Dockerfile) via `docker buildx`
   — **the exact same image used locally**.
2. Extracts `/app/out` straight to `./out` via `--output type=local`.
3. Uploads `./out` as a Pages artifact and deploys to GitHub Pages.

The site is live ~30–90 s after the workflow finishes. To redeploy without
a new commit, click **Run workflow** on the deploy action (it has
`workflow_dispatch` enabled), or run `git commit --allow-empty -m "redeploy" && npm run deploy`.

Working on a branch? Open a PR into `main` and merge it — the merge commit
on `main` is what kicks off the deploy. `npm run deploy` is for shipping
from your local `main`.

### First-time GitHub Pages setup

In repo **Settings → Pages**, set **Source** to **GitHub Actions**. No
branch selection needed — the workflow publishes the artifact directly.

### Custom domain

If you point a custom domain at the site:

1. Add a `CNAME` file under [public/](public/) containing the domain
   (Next.js copies `public/` into `out/` verbatim).
2. Leave `basePath` / `assetPrefix` commented out in [next.config.mjs](next.config.mjs).

For a project-page deploy at `https://<org>.github.io/<repo>/` instead, set:

```js
// next.config.mjs
basePath: '/<repo>',
assetPrefix: '/<repo>/',
```

---

## Project layout

```
src/
  app/          Next.js App Router pages (about, applications, contact, products)
  components/   layout/Navbar, layout/Footer, and shared UI
  lib/          utilities
public/         static assets (images, pdfs) copied verbatim into ./out
next.config.mjs static export + GitHub Pages config
Dockerfile      multi-stage: deps → dev / builder / exporter / preview / export
docker-compose.yml  dev / build / preview services
```

---

## Troubleshooting

- **Port 3000 already in use** — something else is on it (often a stray
  `next dev`). `lsof -i :3000` to find it, then kill the PID.
- **Edits not hot-reloading on macOS/Windows** — already handled via
  `CHOKIDAR_USEPOLLING=true` in [docker-compose.yml](docker-compose.yml). If
  it still misbehaves, `docker compose restart dev`.
- **Stale `./out` after pulling new code** — `rm -rf out && docker compose run --rm build`.
