import chai from 'chai'

import { Request, Response } from '../../tools'
import { ProviderEnum } from '../../constants'
import { UserModel, initializeModels } from '../../models'
import { handler } from './handler'

type Handler = import('../../types').Handler

const PROVIDER = ProviderEnum.Erenfest
const NICKNAME = 'is_duplicated_nickname'

describe('isDuplicatedNickname', () => {
  before(async () => {
    await initializeModels()
  })

  describe('요청 검증', () => {
    it('제공자provider가 있는지 확인한다', async () => {
      const request = Request.Empty as Handler['request']
      const response = Response.Empty

      Object.assign(request, {
        body: {
          nickname: NICKNAME
        }
      })

      const isValidated = await handler(request, response)
        .then(() => ({ isError: true }))
        .catch(() => ({ isError: false }))

      chai.assert.deepEqual(isValidated, { isError: false })
    })

    it('별칭이 있는지 확인한다', async () => {
      const request = Request.Empty as Handler['request']
      const response = Response.Empty

      Object.assign(request, {
        body: {
          provider: PROVIDER
        }
      })

      const isValidated = await handler(request, response)
        .then(() => ({ isError: true }))
        .catch(() => ({ isError: false }))

      chai.assert.deepEqual(isValidated, { isError: false })
    })
  })

  describe('응답 검증', () => {
    const request = Request.Empty as Handler['request']
    const response = Response.Empty

    Object.assign(request, {
      body: {
        provider: PROVIDER,
        nickname: NICKNAME
      }
    })

    it('닉네임이 없으면 false로 응답한다', async () => {
      await handler(request, response)

      chai.should().equal(response.body.body, false)
    })

    it('닉네임이 있으면 true를 응답한다', async () => {
      const EMAIL = 'is_duplicate_nickname.test@example.com'
      const userModel = await UserModel.create({ provider: PROVIDER, email: EMAIL, password: 'password1234', nickname: NICKNAME })

      await handler(request, response)

      chai.should().equal(response.body.body, true)

      await userModel.destroy()
    })
  })
})
