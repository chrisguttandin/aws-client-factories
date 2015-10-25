'use strict';

var di = require('di'),
    DynamoDbClientFactory = require('./factories/dynamo-db.js').DynamoDbClientFactory,
    injector,
    S3ClientFactory = require('./factories/s3.js').S3ClientFactory;

injector = new di.Injector();

module.exports.dynamoDbClientFactory = injector.get(DynamoDbClientFactory);

module.exports.s3ClientFactory = injector.get(S3ClientFactory);
