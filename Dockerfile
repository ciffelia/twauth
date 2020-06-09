FROM node:12.18.0-alpine

# Switch to non-root user
RUN adduser -D twauth
USER twauth
WORKDIR /home/twauth

ENV NODE_ENV production

COPY --chown=twauth:twauth ./package.json ./yarn.lock ./

RUN yarn install --frozen-lockfile --production && \
    yarn cache clean

COPY --chown=twauth:twauth . .

ENTRYPOINT yarn run start
