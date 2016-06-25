'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.s3ClientFactory = exports.dynamoDbClientFactory = undefined;

var _dynamoDb = require('./factories/dynamo-db');

var _s = require('./factories/s3');

const dynamoDbClientFactory = exports.dynamoDbClientFactory = new _dynamoDb.DynamoDbClientFactory();

const s3ClientFactory = exports.s3ClientFactory = new _s.S3ClientFactory();
