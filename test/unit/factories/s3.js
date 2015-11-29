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

        var endpoint;

        beforeEach(function () {
            endpoint = 'a fake endpoint';
            process.env.AWS_ENDPOINT = endpoint;
        });

        it('should create an S3 client with environment variables', function () {
            s3ClientFactory.create();

            expect(AWS.S3).to.have.been.calledOnce;

            expect(AWS.S3).to.have.been.calledWithExactly({
                endpoint: new AWS.Endpoint(endpoint)
            });
        });

        it('should create an S3 client with the given options', function () {
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
