import AwsServerlessExpress from 'aws-serverless-express'

import { server } from './server'

const awsServerlessExpress = AwsServerlessExpress.createServer(server)

export const handler = (event: any, context: any) => {
  return AwsServerlessExpress.proxy(awsServerlessExpress, event, context, 'PROMISE').promise
}
