'use strict';

var AWS = new require('aws-sdk'),
    di = require('di');

class S3ClientFactory {

    create (options = {}) {
        var environment = process.env;

        if (options.accessKeyId === undefined) {
            options.accessKeyId = environment.AWS_ACCESS_KEY_ID;
        }

        if (options.endpoint === undefined && environment.AWS_ENDPOINT !== undefined) {
            options.endpoint = environment.AWS_ENDPOINT;
        }

        if (options.endpoint !== undefined && !(options instanceof AWS.Endpoint)) {
            options.endpoint = new AWS.Endpoint(options.endpoint);
        }

        if (options.region === undefined) {
            options.region = environment.REGION;
        }

        if (options.secretAccessKey === undefined) {
            options.secretAccessKey = environment.AWS_SECRET_KEY;
        }

        return new AWS.S3(options);
    }

}

di.annotate(S3ClientFactory);

module.exports.S3ClientFactory = S3ClientFactory;
