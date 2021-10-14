#!/usr/bin/env sh

set -e

# TODO uncomment once published
#REF_ID=${GITHUB_REF##*/}
#SHOULD_PUBLISH="0"
#re="refs\/tags\/[0-9]+\.[0-9]+\.[0-9]+"
#if [[ "$GITHUB_EVENT_NAME" -eq "push" ]] && [[ "$GITHUB_REF" =~ $re ]]; then
#    SHOULD_PUBLISH="1"
#fi

cd dist/
echo ".tgz" > .npmignore
cp ../package.json .
sed -i 's/dist\/index.js//g' package.json
sed -i 's/husky install//g' package.json

# TODO remove once published
SHOULD_PUBLISH="1"

ARTIFACT_FILENAME=$(npm pack --quiet --omit=dev --ignore-scripts)

echo "Packed library written to $ARTIFACT_FILENAME"

echo "ARTIFACT_FILENAME=dist/$ARTIFACT_FILENAME" >> $GITHUB_ENV
echo "SHOULD_PUBLISH=$SHOULD_PUBLISH" >> $GITHUB_ENV
