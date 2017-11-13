'use strict';
const AWS   = require('aws-sdk');
AWS.config.update({ region: 'eu-west-1' });
const client = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, _callback) {
  var req = client.scan({
    TableName: 'nottsjs__cheese'
  });
  req.on('success', response => {
    var body = response.data.Items;
    var result = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify(body)
    };
    context.succeed(result);
  });
  req.on('error', error => {
    context.fail({
      statusCode: 500,
      body: JSON.stringify(error)
    });
  });
  req.on('complete', _response => {
  });
  req.send();
};
