import chai from 'chai'

import { Request, Response } from '../../tools'
import { ProviderEnum } from '../../constants'
import { UserModel, initializeModels } from '../../models'
import { handler } from './handler'

type Handler = import('../../types').Handler

const PROVIDER = ProviderEnum.Erenfest
const EMAIL = 'is_duplicated_email.test@example.com'

describe('isDuplicatedEmail', () => {
  before(async () => {
    await initializeModels()
  })

  describe('요청 검증', () => {
    it('제공자provider가 있는지 확인한다', async () => {
      const request = Request.Empty as Handler['request']
      const response = Response.Empty

      Object.assign(request, {
        body: {
          email: EMAIL
        }
      })

      const isValidated = await handler(request, response)
        .then(() => ({ isError: true }))
        .catch(() => ({ isError: false }))

      chai.assert.deepEqual(isValidated, { isError: false })
    })

    it('이메일이 있는지 확인한다', async () => {
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
        email: EMAIL
      }
    })

    it('이메일이 없으면 false로 응답한다', async () => {
      await handler(request, response)

      chai.should().equal(response.body.body, false)
    })

    it('이메일이 있으면 true를 응답한다', async () => {
      const userModel = await UserModel.create({
        provider: PROVIDER,
        email: EMAIL,
        password: 'password1234',
        nickname: 'is-duplicated-email'
      })

      await handler(request, response)

      chai.should().equal(response.body.body, true)

      await userModel.destroy()
    })
  })
})
