# Build website
FROM node:18.11.0 AS builder

# create destination directory
ENV WORKDIR /opt/website
RUN mkdir -p ${WORKDIR}
WORKDIR $WORKDIR

COPY . $WORKDIR
RUN npm install
RUN npm run build

# Hosting content
FROM nginx:1.23.1 AS deploy
ENV WORKDIR /opt/website
COPY --from=builder $WORKDIR/dist /usr/share/nginx/html