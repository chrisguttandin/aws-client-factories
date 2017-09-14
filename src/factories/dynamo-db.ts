import { DynamoDB } from 'aws-sdk';

export class DynamoDbClientFactory {

    public create (options: DynamoDB.ClientConfiguration = {}): DynamoDB {
        const environment = process.env;

        if (options.endpoint === undefined && environment.AWS_ENDPOINT !== undefined) {
            options.endpoint = environment.AWS_ENDPOINT;
        }

        return new DynamoDB(options);
    }

}
