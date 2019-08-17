#!/bin/bash

function set_env {
  source .env.development
}

function run {
  exec serverless deploy --stage development
}

printf "\ec"
set_env
run
