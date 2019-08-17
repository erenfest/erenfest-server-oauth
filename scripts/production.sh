#!/bin/bash

function set_env {
  source .env.production
}

function run {
  exec serverless deploy --stage production
}

printf "\ec"
set_env
run
