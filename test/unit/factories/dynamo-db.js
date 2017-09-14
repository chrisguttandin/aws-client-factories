import AWS from 'aws-sdk';
import { DynamoDbClientFactory } from '../../../build/node/factories/dynamo-db';
import { stub } from 'sinon';

describe('dynamoDbClientFactory', function () {

    let dynamoDbClientFactory;

    beforeEach(function () {
        dynamoDbClientFactory = new DynamoDbClientFactory();
    });

    beforeEach(function () {
        AWS.DynamoDB = stub();
    });

    describe('create()', function () {

        let endpoint;

        beforeEach(function () {
            endpoint = 'a fake endpoint';
            process.env.AWS_ENDPOINT = endpoint;
        });

        it('should create a DynamoDB client with environment variables', function () {
            dynamoDbClientFactory.create();

            expect(AWS.DynamoDB).to.have.been.calledOnce;

            expect(AWS.DynamoDB).to.have.been.calledWithExactly({ endpoint });
        });

        it('should create a DynamoDB client with the given options', function () {
            const accessKeyId = 'another fake access key id';
            const endpoint = 'another fake endpoint';
            const params = {
                TableName: 'a fake table name'
            };
            const region = 'another fake region';
            const secretAccessKey = 'another fake secret access key';

            dynamoDbClientFactory.create({
                accessKeyId,
                endpoint,
                params,
                region,
                secretAccessKey
            });

            expect(AWS.DynamoDB).to.have.been.calledOnce;

            expect(AWS.DynamoDB).to.have.been.calledWithExactly({
                accessKeyId,
                endpoint,
                params,
                region,
                secretAccessKey
            });
        });

    });

});
