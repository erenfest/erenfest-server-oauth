import { Sequelize } from 'sequelize'

import { config } from '../config'
import { UserModel } from './UserModel'

export { UserModel } from './UserModel'

let isInitialized: Promise<any>

export const initializeModels = async () => {
  if (isInitialized && (await isInitialized)) {
    return
  }

  isInitialized = Promise.resolve().then(async () => {
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
      logging: false
    })

    UserModel.initialize(sequelize)

    await sequelize.sync()
  })
}
