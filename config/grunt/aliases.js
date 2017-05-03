module.exports = {
    build: [
        'clean:build',
        'babel:build'
    ],
    continuous: [
        'mochaTest:test',
        'watch:continuous'
    ],
    lint: [
        'eslint'
    ],
    test: [
        'build',
        'mochaTest:test'
    ]
};
