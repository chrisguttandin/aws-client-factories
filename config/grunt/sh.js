module.exports = () => {
    return {
        'build': {
            cmd: 'npm run build'
        },
        'lint-config': {
            cmd: 'npm run lint:config'
        },
        'lint-src': {
            cmd: 'npm run lint:src'
        },
        'lint-test': {
            cmd: 'npm run lint:test'
        },
        'test-expectation': {
            cmd: 'mocha --bail --parallel --recursive --require config/mocha/config-expectation.js test/expectation'
        },
        'test-unit': {
            cmd: 'mocha --bail --parallel --recursive --require config/mocha/config-unit.js test/unit'
        }
    };
};
