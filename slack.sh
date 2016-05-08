#!/bin/bash

if [[ -f .env ]]; then
    source .env
fi
export PATH="$PATH:./node_modules/.bin"

npm install

case "$1" in
    s|serve)
        ./node_modules/.bin/forever \
            start -c node bin/botkit \
            --adapter slack \
            --name zbot
        ;;
    r|reboot)
        ./node_modules/.bin/forever \
            start -c node bin/botkit \
            --adapter slack \
            --name zbot
        ;;
    "")
        exit 1
        ;;
    *)
        ./node_modules/.bin/forever "$@"
        ;;
esac
