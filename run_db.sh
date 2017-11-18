#!/bin/bash

docker rm -f bank

docker run \
  --name bank \
  -e POSTGRES_DB=db_bank \
  -e POSTGRES_USER=bank \
  -e POSTGRES_PASSWORD=bank \
  -p 5432:5432 \
  -d postgres:alpine

sleep 3
knex migrate:latest --env staging
