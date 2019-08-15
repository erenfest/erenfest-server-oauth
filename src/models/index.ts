import { Sequelize } from 'sequelize'

import { config } from '../config'
import { UserModel } from './UserModel'
import { AuthModel } from './OAuthModel'

export { UserModel } from './UserModel'
export { AuthModel } from './OAuthModel'

export const initializeModels = async () => {
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
  AuthModel.initialize(sequelize)

  await sequelize.sync()
}
