

import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
    region: 'us-east-1', // Your AWS region
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

export default s3;
