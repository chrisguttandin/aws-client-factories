import AWS from 'aws-sdk';
import { DynamoDbClientFactory } from '../../../build/node/factories/dynamo-db';
import { env } from 'process';
import { stub } from 'sinon';

describe('dynamoDbClientFactory', () => {

    let dynamoDbClientFactory;

    beforeEach(() => {
        dynamoDbClientFactory = new DynamoDbClientFactory();
    });

    beforeEach(() => {
        AWS.DynamoDB = stub();
    });

    describe('create()', () => {

        let endpoint;

        beforeEach(() => {
            endpoint = 'a fake endpoint';
            env.AWS_ENDPOINT = endpoint;
        });

        it('should create a DynamoDB client with environment variables', () => {
            dynamoDbClientFactory.create();

            expect(AWS.DynamoDB).to.have.been.calledOnce;

            expect(AWS.DynamoDB).to.have.been.calledWithExactly({ endpoint });
        });

        it('should create a DynamoDB client with the given options', () => {
            const accessKeyId = 'another fake access key id';
            const anotherEndpoint = 'another fake endpoint';
            const params = {
                TableName: 'a fake table name'
            };
            const region = 'another fake region';
            const secretAccessKey = 'another fake secret access key';

            dynamoDbClientFactory.create({
                accessKeyId,
                endpoint: anotherEndpoint,
                params,
                region,
                secretAccessKey
            });

            expect(AWS.DynamoDB).to.have.been.calledOnce;

            expect(AWS.DynamoDB).to.have.been.calledWithExactly({
                accessKeyId,
                endpoint: anotherEndpoint,
                params,
                region,
                secretAccessKey
            });
        });

    });

});
