'use strict';

var chai = require('chai'),
    register = require('babel/register'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

chai.use(sinonChai);

register({
    stage: 2
});

module.exports = {
    test: {
        options: {
            bail: true,
            clearRequireCache: true,
            require: [
                function () {
                    global.expect = chai.expect;
                    global.sinon = sinon;
                }
            ]
        },
        src: [
            'test/unit/**/*.js'
        ]
    }
};
