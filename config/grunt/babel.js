'use strict';

var babelOptions = require('../babel/build.json');

module.exports = {
    build: {
        files: [{
            cwd: 'src/',
            dest: 'build/',
            expand: true,
            src: [
                '**/*.js'
            ]
        }],
        options: babelOptions
    }
};
