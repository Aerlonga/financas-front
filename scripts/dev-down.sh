#!/bin/bash

# Define a cor amarela para as mensagens
YELLOW='\033[0;33m'
NC='\033[0m' # Sem cor

echo -e "${YELLOW}Parando o ambiente de desenvolvimento...${NC}"

# Para e remove os contêineres, redes e volumes definidos no docker-compose.dev.yml
docker-compose -f docker-compose.dev.yml down