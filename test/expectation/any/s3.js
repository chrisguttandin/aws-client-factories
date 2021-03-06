const { env } = require('process');

describe('AWS.S3', () => {
    let awsAccessKeyId;
    let awsEndpoint;
    let awsRegion;
    let awsSecretAccessKey;
    let S3;

    beforeEach(() => {
        awsAccessKeyId = 'a fake aws access key id';
        awsEndpoint = 'http://a-fake-endpoint.com:1234';
        awsRegion = 'a fake region';
        awsSecretAccessKey = 'a fake aws secret access key';

        Object.keys(require.cache).forEach((key) => delete require.cache[key]);

        env.AWS_ACCESS_KEY_ID = awsAccessKeyId;
        env.AWS_ENDPOINT = awsEndpoint;
        env.AWS_REGION = awsRegion;
        env.AWS_SECRET_ACCESS_KEY = awsSecretAccessKey;

        S3 = require('aws-sdk').S3;
    });

    it('should configure a S3 client with environment variables', () => {
        const s3 = new S3();

        expect(s3.config.credentials.accessKeyId).to.equal(awsAccessKeyId);
        expect(s3.config.region).to.equal(awsRegion);
        expect(s3.config.credentials.secretAccessKey).to.equal(awsSecretAccessKey);
    });

    it('should not configure a S3 client with environment variables for the endpoint', () => {
        const s3 = new S3();

        expect(s3.config.endpoint).to.not.equal(awsEndpoint);
    });
});
