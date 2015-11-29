'use strict';

var AWS = new require('aws-sdk'),
    di = require('di'),
    DynamoDbClientFactory = require('../../../build/factories/dynamo-db.js').DynamoDbClientFactory;

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

        var endpoint;

        beforeEach(function () {
            endpoint = 'a fake endpoint';
            process.env.AWS_ENDPOINT = endpoint;
        });

        it('should create a DynamoDB client with environment variables', function () {
            dynamoDbClientFactory.create();

            expect(AWS.DynamoDB).to.have.been.calledOnce;

            expect(AWS.DynamoDB).to.have.been.calledWithExactly({
                endpoint: new AWS.Endpoint(endpoint)
            });
        });

        it('should create a DynamoDB client with the given options', function () {
            var accessKeyId,
                params = {
                    TableName: 'a fake table name'
                },
                region,
                secretAccessKey;

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
