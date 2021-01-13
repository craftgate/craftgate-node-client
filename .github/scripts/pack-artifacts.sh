#!/usr/bin/env sh

set -e

# TODO uncomment once published
#REF_ID=${GITHUB_REF##*/}
#SHOULD_PUBLISH="0"
#re="refs\/tags\/[0-9]+\.[0-9]+\.[0-9]+"
#if [[ "$GITHUB_EVENT_NAME" -eq "push" ]] && [[ "$GITHUB_REF" =~ $re ]]; then
#    SHOULD_PUBLISH="1"
#fi

# TODO remove once published
SHOULD_PUBLISH="1"

ARTIFACT_FILENAME=$(npm pack --quiet)

echo "Packed library written to $ARTIFACT_FILENAME"

echo "ARTIFACT_FILENAME=$ARTIFACT_FILENAME" >> $GITHUB_ENV
echo "SHOULD_PUBLISH=$SHOULD_PUBLISH" >> $GITHUB_ENV
