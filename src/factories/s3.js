import { Endpoint, S3 } from 'aws-sdk';

export class S3ClientFactory {

    create (options = {}) {
        var environment = process.env;

        if (options.endpoint === undefined && environment.AWS_ENDPOINT !== undefined) {
            options.endpoint = environment.AWS_ENDPOINT;
        }

        if (options.endpoint !== undefined && !(options instanceof Endpoint)) {
            options.endpoint = new Endpoint(options.endpoint);
        }

        return new S3(options);
    }

}
