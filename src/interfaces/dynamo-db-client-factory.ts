import { DynamoDB } from 'aws-sdk';

export interface IDynamoDbClientFactory {

    create (options?: DynamoDB.ClientConfiguration): DynamoDB;

}
