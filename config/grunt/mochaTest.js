'use strict';

var babelOptions = require('../babel/test.json'),
    babelRegister = require('babel-register'),
    chai = require('chai'),
    sinonChai = require('sinon-chai');

chai.use(sinonChai);

module.exports = {
    test: {
        options: {
            bail: true,
            clearRequireCache: true,
            require: [
                function () {
                    babelRegister(babelOptions);
                },
                function () {
                    global.expect = chai.expect;
                }
            ]
        },
        src: [
            'test/assumption/**/*.js',
            'test/unit/**/*.js'
        ]
    }
};
