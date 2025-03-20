module.exports = () => {
    return {
        'build': {
            cmd: 'npm run build'
        },
        'test-expectation': {
            cmd: 'npm run test:expectation'
        },
        'test-unit': {
            cmd: 'npm run test:unit'
        }
    };
};
