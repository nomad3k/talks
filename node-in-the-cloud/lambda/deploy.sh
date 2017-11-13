#!/bin/bash

roleArn="arn:aws:iam::883262741253:role/nottsjs"
sourceArn="arn:aws:execute-api:eu-west-1:883262741253:6cpbpx1j8i/*"

func=$1
echo "Processing ${func}..."

# remove existing code
rm code.zip 2> /dev/null

# zip new code
cd "functions/${func}"
zip -r "../../code.zip" *
cd ../..

echo ">> ${roleArn}"

# update (if present)
echo "===== update-function ====="
aws lambda update-function-code \
  --color on \
  --region eu-west-1 \
  --function-name "${func}" \
  --zip-file fileb://code.zip \

rc=$?
if [ $rc -ne 0 ]
then
  echo ">> ${roleArn}"
  # create (if not present)
  echo '===== create-function ====='
  aws lambda create-function \
    --color on \
    --region eu-west-1 \
    --function-name "${func}" \
    --runtime nodejs4.3 \
    --role "${roleArn}" \
    --handler index.handler \
    --zip-file fileb://code.zip
fi

echo '===== grant api-gateway permission to invoke it ====='
aws lambda add-permission \
  --color on \
  --region eu-west-1 \
  --function-name "${func}" \
  --statement-id "apigateway-test-2" \
  --action lambda:InvokeFunction \
  --principal apigateway.amazonaws.com \
  --source-arn "${sourceArn}"
