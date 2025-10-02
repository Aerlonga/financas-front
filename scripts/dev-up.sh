#!/bin/bash

# Define a cor verde para as mensagens
GREEN='\033[0;32m'
NC='\033[0m' # Sem cor

echo -e "${GREEN}Subindo o ambiente de desenvolvimento (Vite com Hot-Reload)...${NC}"

# O -f aponta para o arquivo de compose de desenvolvimento.
# O --build garante que a imagem seja reconstruída se houver mudanças.
# O -d (detach) roda os contêineres em segundo plano.
# docker-compose -f docker-compose.dev.yml up --build -d
docker-compose -f docker-compose.dev.yml up -d