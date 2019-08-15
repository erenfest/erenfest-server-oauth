import { Sequelize } from 'sequelize'

import { config } from '../config'
import { UserModel } from './UserModel'
import { OAuthModel } from './OAuthModel'

export { UserModel } from './UserModel'
export { OAuthModel } from './OAuthModel'

let isInitialized = false

export const initializeModels = async () => {
  if (isInitialized) {
    return
  }

  isInitialized = true

  const sequelize = new Sequelize({
    host: config.awsRdsHost,
    username: config.awsRdsUsername,
    password: config.awsRdsPassword,
    dialect: config.awsRdsDialect,
    database: config.awsRdsDatabase,
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    },
    pool: {
      min: config.awsRdsPoolMin,
      max: config.awsRdsPoolMax,
      idle: config.awsRdsPoolIdle
    },
    logging: !config.isTest
  })

  UserModel.initialize(sequelize)
  OAuthModel.initialize(sequelize)

  await sequelize.sync()
}
