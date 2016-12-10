'use strict';

const babelOptions = require('../babel/test.json');
const babelRegister = require('babel-register');
const chai = require('chai');
const sinonChai = require('sinon-chai');

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
