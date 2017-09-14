import { S3 } from 'aws-sdk';

export class S3ClientFactory {

    public create (options: S3.ClientConfiguration = {}): S3 {
        const environment = process.env;

        if (options.endpoint === undefined && environment.AWS_ENDPOINT !== undefined) {
            options.endpoint = environment.AWS_ENDPOINT;
        }

        return new S3(options);
    }

}
