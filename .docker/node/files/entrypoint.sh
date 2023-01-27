#!/bin/sh

if [ -z "$(ls -A ./)" ]; then
  ng new app --skip-git --style="scss" --directory="./"
fi

npm start