module.exports = () => {
    return {
        'build': {
            cmd: 'npm run build'
        },
        'test-expectation': {
            cmd: 'mocha --bail --parallel --recursive --require config/mocha/config-expectation.js test/expectation'
        },
        'test-unit': {
            cmd: 'mocha --bail --parallel --recursive --require config/mocha/config-unit.js test/unit'
        }
    };
};
