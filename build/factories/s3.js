'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var AWS = new require('aws-sdk'),
    di = require('di');

var S3ClientFactory = (function () {
    function S3ClientFactory() {
        _classCallCheck(this, S3ClientFactory);
    }

    _createClass(S3ClientFactory, [{
        key: 'create',
        value: function create() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var environment = process.env;

            if (options.endpoint === undefined && environment.AWS_ENDPOINT !== undefined) {
                options.endpoint = environment.AWS_ENDPOINT;
            }

            if (options.endpoint !== undefined && !(options instanceof AWS.Endpoint)) {
                options.endpoint = new AWS.Endpoint(options.endpoint);
            }

            return new AWS.S3(options);
        }
    }]);

    return S3ClientFactory;
})();

di.annotate(S3ClientFactory);

module.exports.S3ClientFactory = S3ClientFactory;
