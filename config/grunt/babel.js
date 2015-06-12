'use strict';

module.exports = {
    build: {
        files: [{
            'cwd': 'src/',
            'dest': 'build/',
            'expand': true,
            'src': [
                '**/*.js'
            ]
        }],
        options: {
            stage: 2
        }
    }
};
