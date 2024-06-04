FROM node:20

WORKDIR /app

COPY package*.json ./

# Install pnpm
RUN npm install -g pnpm

RUN pnpm install

COPY . .

# PRISMA

RUN pnpx prisma generate

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]

