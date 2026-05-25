#!/usr/bin/env bash
# Ship to production: pushes main, which triggers .github/workflows/deploy.yml
# (Docker-based build → GitHub Pages). Safety checks first so this can't be
# fired from a feature branch or with uncommitted work.

set -euo pipefail

branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$branch" != "main" ]; then
  echo "✗ Refusing to deploy from '$branch'. Switch to main first:"
  echo "    git checkout main && git pull"
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "✗ Working tree is dirty. Commit or stash before deploying:"
  git status --short
  exit 1
fi

# Make sure local main is up to date with remote so we don't accidentally
# revert someone else's changes.
git fetch origin main --quiet
local_sha=$(git rev-parse main)
remote_sha=$(git rev-parse origin/main)
if [ "$local_sha" != "$remote_sha" ]; then
  ahead=$(git rev-list --count origin/main..main)
  behind=$(git rev-list --count main..origin/main)
  if [ "$behind" -gt 0 ]; then
    echo "✗ Local main is $behind commit(s) behind origin/main. Pull first:"
    echo "    git pull --ff-only"
    exit 1
  fi
  echo "→ Pushing $ahead new commit(s) to origin/main..."
fi

git push origin main

# Try to surface the Actions URL so the user can watch the deploy.
remote_url=$(git config --get remote.origin.url || true)
if [[ "$remote_url" =~ github\.com[:/]([^/]+)/([^/.]+)(\.git)?$ ]]; then
  owner="${BASH_REMATCH[1]}"
  repo="${BASH_REMATCH[2]}"
  echo ""
  echo "✓ Pushed. Deploy running at:"
  echo "    https://github.com/${owner}/${repo}/actions"
fi
