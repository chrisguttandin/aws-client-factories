import { S3 } from 'aws-sdk';
import { TS3Client } from '../types';

// @todo tslint v5.15.0 does report the next line as an error of the interface-name rule.
export interface IS3ClientFactory { // tslint:disable-line:interface-name

    create (options?: S3.ClientConfiguration): TS3Client;

}
