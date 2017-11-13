jsonlint -q swagger.json

if [ $? -eq 0 ]
then

  json=`cat swagger.json | tr -s " \t\r\n" " "`
  json=\"${json//\"/\\\"}\"

  aws apigateway put-rest-api \
    --region eu-west-1 \
    --rest-api-id "y90q8g7gm2" \
    --mode overwrite \
    --body 'file://swagger.json'

fi
