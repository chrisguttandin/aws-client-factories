import { DynamoDbClientFactory } from './factories/dynamo-db';
import { S3ClientFactory } from './factories/s3';

export * from './interfaces';

export const dynamoDbClientFactory = new DynamoDbClientFactory();

export const s3ClientFactory = new S3ClientFactory();
