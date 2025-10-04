# # Etapa de build
# FROM node:20 AS build
# WORKDIR /app

# # só copia package.json e package-lock.json primeiro
# COPY package*.json ./

# # instala dependências
# RUN npm install

# # agora copia o resto do projeto
# COPY . .

# # garante que exista um .env
# RUN [ -f .env ] || cp .env.example .env

# # argumentos vindos do docker-compose.yml
# ARG VITE_API_URL
# ARG VITE_APP_NAME

# # expõe como variáveis de ambiente no build
# ENV VITE_API_URL=$VITE_API_URL
# ENV VITE_APP_NAME=$VITE_APP_NAME

# # builda o projeto React
# RUN npm run build

# # Nginx para servir os arquivos estáticos
# FROM nginx:1.27
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80

# Etapa de build
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ARG VITE_API_URL
ARG VITE_APP_NAME
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_APP_NAME=$VITE_APP_NAME

RUN npm run build

# Etapa final: Nginx
FROM nginx:1.27
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
