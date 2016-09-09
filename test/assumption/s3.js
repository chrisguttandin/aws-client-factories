describe('AWS.S3', function () {

    var awsAccessKeyId,
        awsEndpoint,
        awsRegion,
        awsSecretAccessKey,
        S3;

    beforeEach(function () {
        awsAccessKeyId = 'a fake aws access key id';
        awsEndpoint = 'http://a-fake-endpoint.com:1234';
        awsRegion = 'a fake region';
        awsSecretAccessKey = 'a fake aws secret access key';

        Object.keys(require.cache).forEach((key) => delete require.cache[key]);

        process.env.AWS_ACCESS_KEY_ID = awsAccessKeyId;
        process.env.AWS_ENDPOINT = awsEndpoint;
        process.env.AWS_REGION = awsRegion;
        process.env.AWS_SECRET_ACCESS_KEY = awsSecretAccessKey;

        S3 = require('aws-sdk').S3;
    });

    it('should configure a S3 client with environment variables', function () {
        var s3 = new S3();

        expect(s3.config.credentials.accessKeyId).to.equal(awsAccessKeyId);
        expect(s3.config.region).to.equal(awsRegion);
        expect(s3.config.credentials.secretAccessKey).to.equal(awsSecretAccessKey);
    });

    it('should not configure a S3 client with environment variables for the endpoint', function () {
        var s3 = new S3();

        expect(s3.config.endpoint).to.not.equal(awsEndpoint);
    });

});
