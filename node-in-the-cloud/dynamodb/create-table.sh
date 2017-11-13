#!/bin/bash

aws dynamodb create-table \
  --region eu-west-1 \
  --table-name nottsjs__cheese \
  --attribute-definitions '{ "AttributeName": "cheese_id", "AttributeType": "S" }' \
  --key-schema '{ "AttributeName": "cheese_id", "KeyType": "HASH" }' \
  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
