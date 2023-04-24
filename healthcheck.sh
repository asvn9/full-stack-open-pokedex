#!/bin/bash

response=$(curl -s https://asvnpokedex.fly.dev/health)

if [ "$response" = "ok" ]; then
  echo "Health check successful"
  exit 0
else
  echo "Health check failed"
  exit 1
fi
