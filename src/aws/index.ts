import Aws from 'aws-sdk'

import { config } from '../config'

Aws.config.update({
  region: config.awsDyanmoDbRegion,
  accessKeyId: config.awsDynamoDbAccessKeyId,
  secretAccessKey: config.awsDynamoDbSecretAccessKey
})

export const dynamodb = new Aws.DynamoDB({ endpoint: config.awsDynamoDbEnpoint })
export const dynamodbclient = new Aws.DynamoDB.DocumentClient({ endpoint: config.awsDynamoDbEnpoint })
