# Lessons

## Bind-mounting an output dir that the build tool deletes → EBUSY

**Symptom:** `next build` with `output: 'export'` fails at "Finalizing page
optimization" with `Error: EBUSY: resource busy or locked, rmdir '/app/out'`
even though all 20 static pages generated successfully.

**Root cause:** Next.js's static export does `rm -rf out` (including
`rmdir`ing the directory itself) during finalization. If `out/` inside the
container is a bind-mount root, the kernel won't let any process unlink the
mount point.

**Rule:** Never bind-mount the *exact* output directory of a build tool that
recreates it. Mount a sibling directory (e.g. `./out:/export`) and `cp -a`
the build output into it as a post-step. The build writes to a
container-local path it fully owns; the bind mount only receives the
finished artifacts.

**Applies to:** Next.js `output: 'export'`, anything that calls `fs.rmSync(dir)`
on its own output dir, webpack `clean: true`, Vite's `emptyOutDir`, etc.

**Pattern (compose):**
```yaml
volumes:
  - ./out:/export
command: >
  sh -c "npm run build &&
         find /export -mindepth 1 -delete &&
         cp -a /app/out/. /export/"
```
