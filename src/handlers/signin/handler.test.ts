import chai from 'chai'

import { initializeModels, UserModel, OAuthModel } from '../../models'
import { Request, Response } from '../../tools'
import { ProviderEnum } from '../../constants'
import { handler } from './handler'

type Handler = import('../../types').Handler

const PROVIDER = ProviderEnum.Erenfest
const EMAIL = 'test.signin@example.com'
const PASSWORD = 'password1234'

describe('signin', () => {
  before(async () => {
    await initializeModels()
  })

  describe('요청 검증', () => {
    const request = Request.Empty as Handler['request']
    const response = Response.Empty

    it('제공자provider를 확인한다', async () => {
      Object.assign(request, {
        body: {
          email: EMAIL,
          password: PASSWORD
        }
      })

      const isValidated = await handler(request, response)
        .then(() => ({ isError: true }))
        .catch(() => ({ isError: false }))

      chai.assert.deepEqual(isValidated, { isError: false })
    })

    it('이메일을 확인한디', async () => {
      Object.assign(request, {
        body: {
          provider: PROVIDER,
          password: PASSWORD
        }
      })

      const isValidated = await handler(request, response)
        .then(() => ({ isError: true }))
        .catch(() => ({ isError: false }))

      chai.assert.deepEqual(isValidated, { isError: false })
    })

    it('암호를 확인한다', async () => {
      Object.assign(request, {
        body: {
          provider: PROVIDER,
          email: EMAIL
        }
      })

      const isValidated = await handler(request, response)
        .then(() => ({ isError: true }))
        .catch(() => ({ isError: false }))

      chai.assert.deepEqual(isValidated, { isError: false })
    })

    it('해당 이메일이 존재하는지 확인한다', async () => {
      Object.assign(request, {
        body: {
          provider: PROVIDER,
          email: EMAIL,
          password: PASSWORD
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

    let userId: number
    let oauthId: number

    before(async () => {
      const userModel = await UserModel.create({ provider: PROVIDER, email: EMAIL, password: PASSWORD, nickname: 'signin.test' })
      const oauthModel = await OAuthModel.create({ provider: PROVIDER, authId: userModel.id, email: EMAIL })

      userId = userModel.id
      oauthId = oauthModel.id
    })

    after(async () => {
      console.log('after')
      await Promise.all([UserModel.destroy({ where: { id: userId } }), OAuthModel.destroy({ where: { id: oauthId } })])
    })

    it('Authorization 토큰이 있다', async () => {
      Object.assign(request, {
        body: {
          provider: PROVIDER,
          email: EMAIL,
          password: PASSWORD
        }
      })

      await handler(request, response)

      chai.should().exist(response.cookie.get('Authorization'))
      chai.should().exist(response.body)
    })
  })
})
