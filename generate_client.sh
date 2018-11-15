#!/usr/bin/env bash

outputFolder="${PWD}/src/api/generated"

docker pull jimschubert/swagger-codegen-cli

docker run -it -v ${outputFolder}:/swagger-api/out \
    -v ${PWD}:/swagger-api/json \
    jimschubert/swagger-codegen-cli generate \
    -i /swagger-api/json/swagger.json \
    -l typescript-fetch \
    -o /swagger-api/out/todo

sudo chmod 777 -R ${outputFolder}