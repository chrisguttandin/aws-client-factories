import { S3 } from 'aws-sdk';

export interface IS3ClientFactory {

    create (options?: S3.ClientConfiguration): S3;

}
