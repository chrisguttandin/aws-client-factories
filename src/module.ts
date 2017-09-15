import { DynamoDB, S3 } from 'aws-sdk';
import { DynamoDbClientFactory } from './factories/dynamo-db';
import { S3ClientFactory } from './factories/s3';

type DynamoDBClientConfiguration = DynamoDB.ClientConfiguration;
type S3ClientConfiguration = S3.ClientConfiguration;

export { DynamoDBClientConfiguration, DynamoDbClientFactory, S3ClientConfiguration, S3ClientFactory };

export const dynamoDbClientFactory = new DynamoDbClientFactory();

export const s3ClientFactory = new S3ClientFactory();
