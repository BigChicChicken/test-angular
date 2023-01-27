FROM node:lts-alpine

ENV CHROME_BIN "/usr/bin/chromium-browser"

RUN apk update && apk add chromium

RUN npm install -g @angular/cli

COPY ./files/entrypoint.sh /tmp/
RUN chmod +x /tmp/entrypoint.sh

WORKDIR /home/node/app

CMD /tmp/entrypoint.sh