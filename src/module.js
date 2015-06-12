'use strict';

var di = require('di'),
    DynamoDbClientFactory = require('./factories/dynamo-db.js').DynamoDbClientFactory,
    injector;

injector = new di.Injector();

module.exports.dynamoDbClientFactory = injector.get(DynamoDbClientFactory);
