import AWS from 'aws-sdk';
import { S3ClientFactory } from '../../../build/node/factories/s3';
import { env } from 'process';
import { stub } from 'sinon';

describe('s3ClientFactory', () => {

    let s3ClientFactory;

    beforeEach(() => {
        s3ClientFactory = new S3ClientFactory();
    });

    beforeEach(() => {
        AWS.S3 = stub();
    });

    describe('create()', () => {

        let endpoint;

        beforeEach(() => {
            endpoint = 'a fake endpoint';
            env.AWS_ENDPOINT = endpoint;
        });

        it('should create an S3 client with environment variables', () => {
            s3ClientFactory.create();

            expect(AWS.S3).to.have.been.calledOnce;

            expect(AWS.S3).to.have.been.calledWithExactly({ endpoint });
        });

        it('should create an S3 client with the given options', () => {
            const accessKeyId = 'another fake access key id';
            const endpoint = 'another fake endpoint';
            const params = {
                TableName: 'a fake table name'
            };
            const region = 'another fake region';
            const secretAccessKey = 'another fake secret access key';

            s3ClientFactory.create({
                accessKeyId,
                endpoint,
                params,
                region,
                secretAccessKey
            });

            expect(AWS.S3).to.have.been.calledOnce;

            expect(AWS.S3).to.have.been.calledWithExactly({
                accessKeyId,
                endpoint,
                params,
                region,
                secretAccessKey
            });
        });

    });

});
