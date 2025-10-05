#!/bin/bash

BLUE='\033[0;34m'
NC='\033[0m' # Sem cor

echo -e "${BLUE}Construindo e subindo o ambiente de produção (Nginx)...${NC}"

# Usa o docker-compose.yml padrão para construir a imagem final e rodar o contêiner
docker-compose up --build -d