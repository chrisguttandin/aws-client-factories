import { DynamoDbClientFactory } from './factories/dynamo-db';
import { S3ClientFactory } from './factories/s3';
import { IDynamoDbClientFactory, IS3ClientFactory } from './interfaces';

/*
 * @todo Explicitly referencing the barrel file seems to be necessary when enabling the
 * isolatedModules compiler option.
 */
export * from './interfaces/index';
export * from './types/index';

export const dynamoDbClientFactory: IDynamoDbClientFactory = new DynamoDbClientFactory();

export const s3ClientFactory: IS3ClientFactory = new S3ClientFactory();
