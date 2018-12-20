import { DynamoDB } from 'aws-sdk';
import { env } from 'process';
import { IDynamoDbClientFactory } from '../interfaces';

export class DynamoDbClientFactory implements IDynamoDbClientFactory {

    public create (options: DynamoDB.ClientConfiguration = { }): DynamoDB {
        if (options.endpoint === undefined && env.AWS_ENDPOINT !== undefined) {
            options.endpoint = env.AWS_ENDPOINT;
        }

        return new DynamoDB(options);
    }

}
