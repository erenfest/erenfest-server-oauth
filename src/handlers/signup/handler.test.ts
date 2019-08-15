import chai from 'chai'

import { ProviderEnum } from '../../constants'
import { initializeModels, UserModel, OAuthModel } from '../../models'
import { Request, Response, AccessToken } from '../../tools'
import { handler } from './handler'

type Handler = import('../../types').Handler

const PROVIDER = ProviderEnum.Erenfest
const EMAIL = 'test@example.com'
const PASSWORD = 'password1234'
const NICKNAME = 'test'

describe('signup', () => {
  describe('입력 검증', () => {
    let userId: number

    before(async () => {
      await initializeModels()

      const userModel = await UserModel.create({
        provider: PROVIDER,
        email: EMAIL,
        password: PASSWORD,
        nickname: NICKNAME
      })
      userId = userModel.id
    })

    after(async () => {
      await UserModel.destroy({ where: { id: userId } })
    })

    it('제공자provider가 있는지 확인한다', async () => {
      const request = Request.Empty as Handler['request']
      const response = Response.Empty

      Object.assign(request, {
        body: {
          email: EMAIL,
          password: PASSWORD,
          nickname: NICKNAME
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
          provider: PROVIDER,
          password: PASSWORD,
          nickname: NICKNAME
        }
      })
      const isValidated = await handler(request, response)
        .then(() => ({ isError: true }))
        .catch(() => ({ isError: false }))

      chai.assert.deepEqual(isValidated, { isError: false })
    })

    it('암호가 있는지 확인한다', async () => {
      const request = Request.Empty as Handler['request']
      const response = Response.Empty

      Object.assign(request, {
        body: {
          provider: PROVIDER,
          email: EMAIL,
          nickname: NICKNAME
        }
      })
      const isValidated = await handler(request, response)
        .then(() => ({ isError: true }))
        .catch(() => ({ isError: false }))

      chai.assert.deepEqual(isValidated, { isError: false })
    })

    it('닉네임이 있는지 확인한다', async () => {
      const request = Request.Empty as Handler['request']
      const response = Response.Empty

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

    it('정책 동의 리스트가 있는지 확인한다')

    it('해당 제공자에 중복 이메일인지 확인힌다', async () => {
      const request = Request.Empty as Handler['request']
      const response = Response.Empty as Handler['response']

      Object.assign(request, {
        body: {
          provider: PROVIDER,
          email: EMAIL,
          password: PASSWORD,
          nickname: NICKNAME + '1'
        }
      })
      const isValidated = await handler(request, response)
        .then(() => ({ isError: true }))
        .catch(() => ({ isError: false }))

      chai.assert.deepEqual(isValidated, { isError: false })
    })

    it('해당 제공자에 중복 별칭이 있는지 확인한다', async () => {
      const request = Request.Empty as Handler['request']
      const response = Response.Empty as Handler['response']

      Object.assign(request, {
        body: {
          provider: PROVIDER,
          email: 'a' + EMAIL,
          password: PASSWORD,
          nickname: NICKNAME
        }
      })
      const isValidated = await handler(request, response)
        .then(() => ({ isError: true }))
        .catch(() => ({ isError: false }))

      chai.assert.deepEqual(isValidated, { isError: false })
    })
  })

  describe('응답 검증', () => {
    let response: Handler['response']

    before(async () => {
      const request = Request.Empty as Handler['request']
      response = Response.Empty

      Object.assign(request, {
        body: {
          provider: PROVIDER,
          email: EMAIL,
          password: PASSWORD,
          nickname: NICKNAME
        }
      })
      await handler(request, response)
    })

    after(async () => {
      const { accessToken } = JSON.parse(response.body.body)
      const { data } = await AccessToken.decode(accessToken)
      const oauthModel = await OAuthModel.findOne({ where: { id: data.id } })
      await oauthModel!.destroy()
      await UserModel.destroy({ where: { id: oauthModel!.authId } })
    })

    it('cookie에 Authorization 토큰이 있다', async () => {
      chai.should().exist(response.cookie.get('Authorization'))
    })

    it('body에 Authorization 토큰이 있다', async () => {
      chai.should().exist(response.body.body)
    })
  })
})
