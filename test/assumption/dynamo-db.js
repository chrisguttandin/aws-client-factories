'use strict';

describe('AWS.DynamoDB', function () {

    var awsAccessKeyId,
        awsEndpoint,
        awsRegion,
        awsSecretAccessKey,
        DynamoDB;

    beforeEach(function () {
        awsAccessKeyId = 'a fake aws access key id';
        awsEndpoint = 'http://a-fake-endpoint.com:1234';
        awsRegion = 'a fake region';
        awsSecretAccessKey = 'a fake aws secret access key';

        delete require.cache[require.resolve('aws-sdk')];

        process.env.AWS_ACCESS_KEY_ID = awsAccessKeyId;
        process.env.AWS_ENDPOINT = awsEndpoint;
        process.env.AWS_REGION = awsRegion;
        process.env.AWS_SECRET_ACCESS_KEY = awsSecretAccessKey;

        DynamoDB = new require('aws-sdk').DynamoDB;
    });

    it('should configure a DynamoDB client with environment variables for the credentials and region', function () {
        var dynamoDB = new DynamoDB();

        expect(dynamoDB.config.credentials.accessKeyId).to.equal(awsAccessKeyId);
        expect(dynamoDB.config.region).to.equal(awsRegion);
        expect(dynamoDB.config.credentials.secretAccessKey).to.equal(awsSecretAccessKey);
    });

    it('should not configure a DynamoDB client with environment variables for the endpoint', function () {
        var dynamoDB = new DynamoDB();

        expect(dynamoDB.config.endpoint).to.not.equal(awsEndpoint);
    });

});
