const { expect } = require('chai');
const babelOptions = require('../babel/test.json');
const babelRegister = require('@babel/register');

babelRegister(babelOptions);

global.expect = expect;
