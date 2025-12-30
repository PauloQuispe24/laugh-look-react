FROM node:20-alpine AS base
RUN apk add --no-cache git
RUN npm install -g pnpm
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base AS development
COPY --chown=node:node . .
EXPOSE 5173
CMD ["pnpm", "run", "dev", "--host"]

FROM base AS build-step
COPY --chown=node:node . .
RUN pnpm build

FROM nginx:alpine AS production
COPY --chown=node:node --from=build-step /app/dist /usr/share/nginx/html
EXPOSE 80
