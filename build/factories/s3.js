'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.S3ClientFactory = undefined;

var _awsSdk = require('aws-sdk');

class S3ClientFactory {

    create(options = {}) {
        // eslint-disable-line class-methods-use-this
        var environment = process.env;

        if (options.endpoint === undefined && environment.AWS_ENDPOINT !== undefined) {
            options.endpoint = environment.AWS_ENDPOINT;
        }

        if (options.endpoint !== undefined && !(options instanceof _awsSdk.Endpoint)) {
            options.endpoint = new _awsSdk.Endpoint(options.endpoint);
        }

        return new _awsSdk.S3(options);
    }

}
exports.S3ClientFactory = S3ClientFactory;
