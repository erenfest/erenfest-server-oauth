export const config = {
  nodeEnv: process.env.NODE_ENV! as 'production' | 'development' | 'local' | 'example',
  isProduction: process.env.NODE_ENV! === 'production',
  isDevelopment: process.env.NODE_ENV! === 'development',
  isLocal: process.env.NODE_ENV! === 'local',

  port: process.env.PORT!,

  refreshTokenSecretKey: process.env.REFRESH_TOKEN_SECRET_KEY!,
  accessTokenSecretKey: process.env.ACCESS_TOKEN_SECRET_KEY!,
  awsDynamoDbEnpoint: process.env.AWS_DYNAMO_DB_ENDPOINT!,
  awsDyanmoDbRegion: process.env.AWS_DYNAMO_DB_REGION!,
  awsDynamoDbAccessKeyId: process.env.AWS_DYNAMO_DB_ACCESS_KEY_ID!,
  awsDynamoDbSecretAccessKey: process.env.AWS_DYNAMO_DB_SECRET_ACCESS_KEY!
}

{
  class EnvironmentError extends Error {
    public readonly name = 'EnvironmentError'
    public readonly message: string

    public constructor(message: string) {
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
