#!/bin/bash

aws dynamodb batch-write-item \
  --region eu-west-1 \
  --request-items file://batch-write-item.json \
  --return-consumed-capacity TOTAL
