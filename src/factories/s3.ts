import { S3 } from 'aws-sdk';
import { env } from 'process';
import { IS3ClientFactory } from '../interfaces';

export class S3ClientFactory implements IS3ClientFactory {

    public create (options: S3.ClientConfiguration = { }): S3 {
        if (options.endpoint === undefined && env.AWS_ENDPOINT !== undefined) {
            options.endpoint = env.AWS_ENDPOINT;
        }

        return new S3(options);
    }

}
