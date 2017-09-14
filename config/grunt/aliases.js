module.exports = {
    build: [
        'clean:build',
        'babel:build'
    ],
    lint: [
        'eslint'
    ],
    test: [
        'build',
        'mochaTest:test'
    ]
};
