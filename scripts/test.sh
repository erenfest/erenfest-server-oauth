#!/bin/bash

function set_env {
  source .env.test
}

function run_test {
  exec mocha -r ts-node/register src/**/*.test.ts
}

clear
set_env
run_test
