import { Model, Sequelize, INTEGER, STRING, DATE, NOW } from 'sequelize'

import { ProviderEnum } from '../constants'

export class OAuthModel extends Model {
  static initialize: (sequelize: Sequelize) => void

  readonly id: number
  readonly provider: ProviderEnum
  readonly authId: string
  readonly email: string
  readonly createdAt: Date
  readonly deletedAt: Date
}

OAuthModel.initialize = sequelize => {
  OAuthModel.init(
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      provider: {
        type: STRING(12),
        allowNull: false,
        validate: {
          isIn: [[ProviderEnum.Google, ProviderEnum.Erenfest]]
        }
      },
      authId: {
        type: STRING(64),
        allowNull: false,
        validate: {
          len: [1, 64]
        }
      },
      email: {
        type: STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      createdAt: {
        type: DATE,
        allowNull: false,
        defaultValue: NOW
      },
      deletedAt: {
        type: DATE,
        allowNull: true,
        defaultValue: null
      }
    },
    {
      sequelize,
      tableName: 'Auth',
      modelName: 'Auth',
      updatedAt: false,
      deletedAt: true
    }
  )
}
