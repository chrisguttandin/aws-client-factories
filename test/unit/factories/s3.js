'use strict';

var AWS = new require('aws-sdk'),
    di = require('di'),
    S3ClientFactory = require('../../../build/factories/s3.js').S3ClientFactory;

describe('s3ClientFactory', function () {

    var injector,
        s3ClientFactory;

    beforeEach(function () {
        injector = new di.Injector();

        s3ClientFactory = injector.get(S3ClientFactory);
    });

    beforeEach(function () {
        AWS.S3 = sinon.stub();
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

        it('should create an S3 client with environment variables', function () {
            s3ClientFactory.create();

            expect(AWS.S3).to.have.been.calledOnce;

            expect(AWS.S3).to.have.been.calledWithExactly({
                accessKeyId: accessKeyId,
                endpoint: new AWS.Endpoint(endpoint),
                region: region,
                secretAccessKey: secretAccessKey
            });
        });

        it('should create an S3 client with the given options', function () {
            var params = {
                    TableName: 'a fake table name'
                };

            accessKeyId = 'another fake access key id';
            endpoint = 'another fake endpoint';
            region = 'another fake region';
            secretAccessKey = 'another fake secret access key';

            s3ClientFactory.create({
                accessKeyId: accessKeyId,
                endpoint: endpoint,
                params: params,
                region: region,
                secretAccessKey: secretAccessKey
            });

            expect(AWS.S3).to.have.been.calledOnce;

            expect(AWS.S3).to.have.been.calledWithExactly({
                accessKeyId: accessKeyId,
                endpoint: new AWS.Endpoint(endpoint),
                params: params,
                region: region,
                secretAccessKey: secretAccessKey
            });
        });

    });

});
