FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ── dev: mount src via volume, hot-reload on :4321 ──────────────────────────
FROM base AS dev
COPY . .
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ── build: produce /app/dist ─────────────────────────────────────────────────
FROM base AS build
COPY . .
RUN npm run build

# ── preview: serve the built output on :4321 ─────────────────────────────────
FROM base AS preview
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
EXPOSE 4321
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
