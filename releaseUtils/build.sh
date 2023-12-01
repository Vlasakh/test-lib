#!/usr/bin/env bash

rm -rf ./build

npx babel ./src -d build --source-maps true
#--watch


#watch="false"
#
#for arg in "$@"
#do
#    if [ "$arg" == "--watch" ]; then
#        watch="true"
#    fi
#done
#
#if [ "$watch" == "true" ]; then
#    echo "Watch parameter is set!"
#else
#    echo "Watch parameter is not set."
#fi
