'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var AWS = new require('aws-sdk'),
    di = require('di');

var DynamoDbClientFactory = (function () {
    function DynamoDbClientFactory() {
        _classCallCheck(this, DynamoDbClientFactory);
    }

    _createClass(DynamoDbClientFactory, [{
        key: 'create',
        value: function create() {
            var options = arguments[0] === undefined ? {} : arguments[0];

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

            return new AWS.DynamoDB(options);
        }
    }]);

    return DynamoDbClientFactory;
})();

di.annotate(DynamoDbClientFactory);

module.exports.DynamoDbClientFactory = DynamoDbClientFactory;
