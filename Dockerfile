FROM node:18-alpine

WORKDIR /app

RUN chown -R 1000:1000 /app

USER 1000

COPY --chown=1000:1000 . .

RUN npm install

ENTRYPOINT ["tail", "-f", "/dev/null"]