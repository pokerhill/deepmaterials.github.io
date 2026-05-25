# Dockerize + README refresh

## Goal
Make the repo runnable identically on any contributor's machine via Docker, and make CI deploy through that same image so local == prod.

## Plan
- [ ] Add `Dockerfile` (multi-stage):
  - `deps`  — `node:20-alpine`, `npm ci`
  - `dev`   — runs `next dev -H 0.0.0.0` on :3000
  - `builder` — has source + deps, default CMD `npm run build` (no bake)
  - `exporter` — `RUN npm run build` to bake `/app/out`
  - `preview` — `nginx:alpine`, copies baked `/app/out`, serves :8080
  - `export` (FROM scratch) — for CI `--output type=local,dest=./out`
- [ ] Add `.dockerignore` (node_modules, .next, out, .git, *.tsbuildinfo, etc.)
- [ ] Add `docker-compose.yml` with `dev`, `build`, `preview` services
- [ ] Update `.github/workflows/deploy.yml` to build via buildx `--target export`
- [ ] Rewrite `README.md`: what this is, Docker quickstart, native fallback, deploy flow, config notes
- [ ] Stop the running dev server (bg `bgyqz953m`)
- [ ] Smoke-test: `docker compose up dev` reaches :3000, `docker compose run --rm build` produces `./out/index.html`

## Open decisions (resolved)
- CI: build through Docker image (parity over speed)
- Preview target: yes, nginx on :8080

## Review

All three flows verified end-to-end on local Docker (engine 29.1.2):

| Flow | Command | Result |
|------|---------|--------|
| Dev  | `docker compose up dev`     | HTTP 200 on :3000 (~30 KB index) |
| Build| `docker compose run --rm build` | `./out/index.html` 29,995 B; 20 static pages |
| Preview | `docker compose up preview` | HTTP 200 on :8080 (29,995 B, identical to build) |

### One non-obvious bug caught during smoke test
Initial `docker-compose.yml` bind-mounted `./out:/app/out`. `next build`
with `output: 'export'` does a final `rmdir('/app/out')` which fails on a
bind-mount root (`EBUSY`). Fixed by mounting `./out:/export` instead and
copying after the build — see comment in [docker-compose.yml](../docker-compose.yml).
Captured this in [lessons.md](lessons.md).

### Files added/changed
- **Added** [Dockerfile](../Dockerfile) (6 stages)
- **Added** [.dockerignore](../.dockerignore)
- **Added** [docker-compose.yml](../docker-compose.yml)
- **Changed** [.github/workflows/deploy.yml](../.github/workflows/deploy.yml) — now builds via `docker buildx --target export`
- **Rewritten** [README.md](../README.md) — Docker quickstart, native fallback, deploy flow, troubleshooting

