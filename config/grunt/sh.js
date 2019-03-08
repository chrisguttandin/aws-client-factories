module.exports = {
    'build': {
        cmd: 'tsc -p src/tsconfig.json'
    },
    'lint': {
        cmd: 'tslint --config config/tslint/src.json --project src/tsconfig.json src/*.ts src/**/*.ts'
    },
    'test-expectation': {
        cmd: 'mocha --bail --recursive --require config/mocha/config-expectation.js test/expectation'
    },
    'test-unit': {
        cmd: 'mocha --bail --recursive --require config/mocha/config-unit.js test/unit'
    }
};
