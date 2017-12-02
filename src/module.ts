import { DynamoDbClientFactory } from './factories/dynamo-db';
import { S3ClientFactory } from './factories/s3';
import { IDynamoDbClientFactory, IS3ClientFactory } from './interfaces';

export * from './interfaces';

export const dynamoDbClientFactory: IDynamoDbClientFactory = new DynamoDbClientFactory();

export const s3ClientFactory: IS3ClientFactory = new S3ClientFactory();
