#!/bin/bash

aws dynamodb put-item \
  --region eu-west-1 \
  --table-name nottsjs__cheese \
  --item file://put-item.json \
  --return-consumed-capacity TOTAL
