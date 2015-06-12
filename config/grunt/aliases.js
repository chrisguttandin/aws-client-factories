'use strict';

module.exports = {
    build: [
        'clean:build',
        'babel:build'
    ],
    continuous: [
        'mochaTest:test',
        'watch:continuous',
    ],
    lint: [
        'jshint'
    ],
    test: [
        'mochaTest:test',
    ]
};
