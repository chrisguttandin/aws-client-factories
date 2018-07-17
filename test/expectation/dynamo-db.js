const { env } = require('process');

describe('AWS.DynamoDB', () => {

    let awsAccessKeyId;
    let awsEndpoint;
    let awsRegion;
    let awsSecretAccessKey;
    let DynamoDB;

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

        DynamoDB = require('aws-sdk').DynamoDB;
    });

    it('should configure a DynamoDB client with environment variables for the credentials and region', () => {
        const dynamoDB = new DynamoDB();

        expect(dynamoDB.config.credentials.accessKeyId).to.equal(awsAccessKeyId);
        expect(dynamoDB.config.region).to.equal(awsRegion);
        expect(dynamoDB.config.credentials.secretAccessKey).to.equal(awsSecretAccessKey);
    });

    it('should not configure a DynamoDB client with environment variables for the endpoint', () => {
        const dynamoDB = new DynamoDB();

        expect(dynamoDB.config.endpoint).to.not.equal(awsEndpoint);
    });

});
