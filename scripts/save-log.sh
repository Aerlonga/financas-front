#!/bin/bash

# Pasta de destino
LOG_DIR="./src/logs"

# Cria pasta se não existir
mkdir -p $LOG_DIR

# Data atual (YYYY-MM-DD)
DATA=$(date +"%Y-%m-%d")

# Arquivo de log de destino
DESTINO="$LOG_DIR/npm-log-$DATA.log"

# Log mais recente do npm
ULTIMO_LOG=$(ls -t ~/.npm/_logs/*-debug-0.log | head -n 1)

# Copia pro arquivo com data
cp "$ULTIMO_LOG" "$DESTINO"

echo "✅ Log salvo em: $DESTINO"
