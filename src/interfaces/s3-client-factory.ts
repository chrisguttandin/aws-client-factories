import { S3 } from 'aws-sdk';
import { TS3Client } from '../types';

export interface IS3ClientFactory {
    create(options?: S3.ClientConfiguration): TS3Client;
}
