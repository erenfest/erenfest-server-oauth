export const config = {
  nodeEnv: process.env.NODE_ENV! as 'production' | 'development' | 'local' | 'test' | 'example',
  isProduction: process.env.NODE_ENV! === 'production',
  isDevelopment: process.env.NODE_ENV! === 'development',
  isLocal: process.env.NODE_ENV! === 'local',
  isTest: process.env.NODE_ENV! === 'test',

  port: +process.env.PORT!,

  refreshTokenSecretKey: process.env.REFRESH_TOKEN_SECRET_KEY!,
  accessTokenSecretKey: process.env.ACCESS_TOKEN_SECRET_KEY!,

  awsDynamoDbEnpoint: process.env.AWS_DYNAMO_DB_ENDPOINT!,
  awsDyanmoDbRegion: process.env.AWS_DYNAMO_DB_REGION!,
  awsDynamoDbAccessKeyId: process.env.AWS_DYNAMO_DB_ACCESS_KEY_ID!,
  awsDynamoDbSecretAccessKey: process.env.AWS_DYNAMO_DB_SECRET_ACCESS_KEY!,

  awsRdsHost: process.env.AWS_RDS_HOST!,
  awsRdsPort: +process.env.AWS_RDS_PORT!,
  awsRdsUsername: process.env.AWS_RDS_USERNAME!,
  awsRdsPassword: process.env.AWS_RDS_PASSWORD!,
  awsRdsDialect: process.env.AWS_RDS_DIALECT! as import('sequelize/types').Dialect,
  awsRdsDatabase: process.env.AWS_RDS_DATABASE!,
  awsRdsPoolMin: +process.env.AWS_RDS_POOL_MIN!,
  awsRdsPoolMax: +process.env.AWS_RDS_POOL_MAX!,
  awsRdsPoolIdle: +process.env.AWS_RDS_POOL_IDLE!
}

{
  class EnvironmentError extends Error {
    readonly name = 'EnvironmentError'
    readonly message: string

    constructor(message: string) {
      super()
      this.message = message
    }
  }

  for (const key in config) {
    if (config[key] === undefined) {
      const message = `Environment variable [${key}] not set`
      throw new EnvironmentError(message)
    }
  }

  if (config.nodeEnv === 'example') {
    const message = `Run with environment variables`
    throw new EnvironmentError(message)
  }
}
