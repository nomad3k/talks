'use strict';
const AWS   = require('aws-sdk');
AWS.config.update({ region: 'eu-west-1' });
const client = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, _callback) {
  var cheeseId = event.pathParameters.cheese_id;

  var req = client.query({
    TableName: 'nottsjs__cheese',
    KeyConditions: {
      cheese_id: {
        ComparisonOperator: 'EQ',
        AttributeValueList: [ cheeseId ]
      }
    }
  });
  req.on('success', response => {
    if (response.data.Items.length == 0) {
      context.succeed({
          statusCode: 404,
          body: JSON.stringify({ message: 'Not Found' })
      });
    } else {
      var body = response.data.Items[0];
      var result = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify(body)
      };
      context.succeed(result);
    }
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
