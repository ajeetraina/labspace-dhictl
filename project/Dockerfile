# Product Catalog — starting point.
#
# This is a typical "it works on my machine" Dockerfile: a single stage built
# on a general-purpose Node.js base image, installing all dependencies and
# running as the root user. You will harden it with a Docker Hardened Image
# later in the lab.
FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/server.js"]
