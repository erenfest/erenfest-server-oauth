import { Model, Sequelize, INTEGER, STRING, DATE, NOW } from 'sequelize'

import { ProviderEnum } from '../constants'

export class UserModel extends Model {
  static initialize: (sequelize: Sequelize) => void

  readonly id: number
  readonly provider: ProviderEnum
  readonly email: string
  readonly password: string
  readonly nickname: string
  readonly createdAt: Date
  readonly deletedAt: Date
}

UserModel.initialize = sequelize => {
  UserModel.init(
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
          isIn: [[ProviderEnum.Erenfest]]
        }
      },
      email: {
        type: STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: STRING(64),
        allowNull: false,
        validate: {
          len: [1, 64]
        }
      },
      nickname: {
        type: STRING(24),
        allowNull: false,
        validate: {
          len: [3, 24]
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
      tableName: 'User',
      modelName: 'User',
      updatedAt: false,
      indexes: [
        {
          unique: true,
          fields: ['provider', 'email']
        },
        {
          unique: true,
          fields: ['provider', 'nickname']
        }
      ]
    }
  )
}
