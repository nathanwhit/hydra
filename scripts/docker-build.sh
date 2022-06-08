#!/bin/bash

. scripts/base-images.sh

docker buildx build --platform linux/arm64/v8,linux/amd64 --push \
    --build-arg HASURA="$HYDRA_HASURA_BASE" \
    "$@"
