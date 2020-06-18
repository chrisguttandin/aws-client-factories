import { DynamoDB } from 'aws-sdk';
import { TDynamoDbClient } from '../types';

export interface IDynamoDbClientFactory {
    create(options?: DynamoDB.ClientConfiguration): TDynamoDbClient;
}
