'use strict';

var AWS = new require('aws-sdk'),
    di = require('di'),
    DynamoDbClientFactory = require('../../../src/factories/dynamo-db.js').DynamoDbClientFactory;

describe('dynamoDbClientFactory', function () {

    var dynamoDbClientFactory,
        injector;

    beforeEach(function () {
        injector = new di.Injector();

        dynamoDbClientFactory = injector.get(DynamoDbClientFactory);
    });

    beforeEach(function () {
        AWS.DynamoDB = sinon.stub();
    });

    describe('create()', function () {

        var accessKeyId,
            endpoint,
            region,
            secretAccessKey;

        beforeEach(function () {
            accessKeyId = 'a fake access key id';
            process.env.AWS_ACCESS_KEY_ID = accessKeyId;

            endpoint = 'a fake endpoint';
            process.env.AWS_ENDPOINT = endpoint;

            region = 'a fake region';
            process.env.REGION = region;

            secretAccessKey = 'a fake secret access key';
            process.env.AWS_SECRET_ACCESS_KEY = secretAccessKey;
        });

        it('should create a DynamoDB client with environment variables', function () {
            dynamoDbClientFactory.create();

            expect(AWS.DynamoDB).to.have.been.calledOnce;

            expect(AWS.DynamoDB).to.have.been.calledWithExactly({
                accessKeyId: accessKeyId,
                endpoint: new AWS.Endpoint(endpoint),
                region: region,
                secretAccessKey: secretAccessKey
            });
        });

        it('should create a DynamoDB client with the given options', function () {
            var params = {
                    TableName: 'a fake table name'
                };

            accessKeyId = 'another fake access key id';
            endpoint = 'another fake endpoint';
            region = 'another fake region';
            secretAccessKey = 'another fake secret access key';

            dynamoDbClientFactory.create({
                accessKeyId: accessKeyId,
                endpoint: endpoint,
                params: params,
                region: region,
                secretAccessKey: secretAccessKey
            });

            expect(AWS.DynamoDB).to.have.been.calledOnce;

            expect(AWS.DynamoDB).to.have.been.calledWithExactly({
                accessKeyId: accessKeyId,
                endpoint: new AWS.Endpoint(endpoint),
                params: params,
                region: region,
                secretAccessKey: secretAccessKey
            });
        });

    });

});
