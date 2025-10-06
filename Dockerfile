# Etapa de build
FROM node:20.19-alpine AS build
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala dependências de produção
RUN npm ci --omit=dev --legacy-peer-deps

# Copia o resto do projeto
COPY . .

# Argumentos vindos do docker-compose.yml
ARG VITE_API_URL
ARG VITE_APP_NAME

# Expõe como variáveis de ambiente no build
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_APP_NAME=$VITE_APP_NAME

# Builda o projeto React
RUN npm run build

# Etapa final: Nginx
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80