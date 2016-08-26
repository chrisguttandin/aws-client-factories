import { DynamoDB, Endpoint } from 'aws-sdk';

export class DynamoDbClientFactory {

    create (options = {}) { // eslint-disable-line class-methods-use-this
        var environment = process.env;

        if (options.endpoint === undefined && environment.AWS_ENDPOINT !== undefined) {
            options.endpoint = environment.AWS_ENDPOINT;
        }

        if (options.endpoint !== undefined && !(options instanceof Endpoint)) {
            options.endpoint = new Endpoint(options.endpoint);
        }

        return new DynamoDB(options);
    }

}
