#!/bin/bash

function set_env {
  source .env.local
}

function run {
  exec ts-node src/local.ts
}

printf "\ec"
set_env
run
