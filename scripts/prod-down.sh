#!/bin/bash

RED='\033[0;31m'
NC='\033[0m' # Sem cor

echo -e "${RED}Parando o ambiente de produção...${NC}"

# Usa o docker-compose.yml padrão para parar o contêiner
docker-compose down