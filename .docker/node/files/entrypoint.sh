#!/bin/sh

if [ -z "$(ls -A ./)" ]; then
  ng new app --routing --skip-git --style="scss" --directory="./"
fi

npm start