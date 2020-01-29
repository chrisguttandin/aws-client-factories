module.exports = (grunt) => {
    const fix = (grunt.option('fix') === true);

    return {
        'build': {
            cmd: 'tsc -p src/tsconfig.json'
        },
        'lint-config': {
            cmd: `eslint --config config/eslint/config.json --ext .js ${ (fix) ? '--fix ' : '' }--report-unused-disable-directives *.js config/`
        },
        'lint-src': {
            cmd: 'tslint --config config/tslint/src.json --project src/tsconfig.json src/*.ts src/**/*.ts'
        },
        'lint-test': {
            cmd: `eslint --config config/eslint/test.json --ext .js ${ (fix) ? '--fix ' : '' }--report-unused-disable-directives test/`
        },
        'test-expectation': {
            cmd: 'mocha --bail --recursive --require config/mocha/config-expectation.js test/expectation'
        },
        'test-unit': {
            cmd: 'mocha --bail --recursive --require config/mocha/config-unit.js test/unit'
        }
    };
};
