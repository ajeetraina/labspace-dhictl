#!/usr/bin/env bash
#
# introduce-vulnerabilities.sh
#
# Simulates a common real-world mistake: pinning a service to an old, no-longer
# patched base image. It rewrites the Dockerfile's base image from a current
# Node.js release (node:22) to an older one (node:18) that ships with many more
# known CVEs.
#
# This is intentionally the *wrong* thing to do — you will measure the damage
# and then fix it with a Docker Hardened Image.

set -euo pipefail

DOCKERFILE="Dockerfile"

if [ ! -f "$DOCKERFILE" ]; then
  echo "❌ Could not find ${DOCKERFILE} in the current directory."
  exit 1
fi

echo "🔧 Rewriting base image in ${DOCKERFILE}: node:22  ->  node:18"

# Cross-platform in-place sed (GNU and BSD).
if sed --version >/dev/null 2>&1; then
  sed -i 's/node:22/node:18/g' "$DOCKERFILE"
else
  sed -i '' 's/node:22/node:18/g' "$DOCKERFILE"
fi

echo
echo "⚠️  Done. The base image is now:"
grep -n '^FROM' "$DOCKERFILE"
echo
echo "You just downgraded to an older, more vulnerable base image."
echo "Build and scan it to see how many CVEs you inherited."
