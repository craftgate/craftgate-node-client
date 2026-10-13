#!/usr/bin/env sh
# Sets the package version from a release tag: "v1.0.71" and "1.0.71" both become "1.0.71".

set -e

RELEASE_TAG="${1:?usage: set-version.sh <tag>}"
VERSION="${RELEASE_TAG#v}"
if ! printf '%s' "$VERSION" | grep -Eq '^[0-9]+\.[0-9]+\.[0-9]+$'; then
  echo "::error::Release tag '$RELEASE_TAG' must be in the form X.Y.Z or vX.Y.Z"
  exit 1
fi
npm version --allow-same-version --no-git-tag-version "$VERSION"
echo "VERSION=$VERSION" >> "$GITHUB_ENV"
