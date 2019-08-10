import * as chai from 'chai'
import Time from 'dayjs'

import { Request, Response, RefreshToken } from '../../tools'
import { validateRefreshToken } from './index'
import { Auth } from './Auth'

describe('validateRefreshToken', () => {
  const SECRET_KEY = 'Secret Key'
  validateRefreshToken.initialize(SECRET_KEY)

  const createRefreshToken = () => {
    const refreshToken = new RefreshToken(SECRET_KEY)
    const issuedAt = Time().toDate()
    const expiredAt = Time(issuedAt)
      .add(7, 'day')
      .toDate()
    return refreshToken.encode({ id: 1 }, { issuedAt, expiredAt })
  }

  it('cookie에 Authorization 필드가 있는지 확인한다', async () => {
    const request = Request.Empty
    const response = Response.Empty

    request.cookie.Authorization = await createRefreshToken()
    await validateRefreshToken(request, response)

    request.cookie.Authorization = null
    delete request.cookie.Authorization
    const isValidated = await validateRefreshToken(request, response)
      .then(() => ({ isError: true }))
      .catch(() => ({ isError: false }))
    chai.assert.deepEqual(isValidated, { isError: false })
  })

  it('header에 Authorization 필드가 있는지 확인한다', async () => {
    const request = Request.Empty
    const response = Response.Empty

    request.headers.Authorization = await createRefreshToken()
    await validateRefreshToken(request, response)

    request.headers.Authorization = null
    delete request.headers.Authorization
    const isValidated = await validateRefreshToken(request, response)
      .then(() => ({ isError: true }))
      .catch(() => ({ isError: false }))
    chai.assert.deepEqual(isValidated, { isError: false })
  })

  it('정상적인 토큰이 아니면 에러가 발생한다', async () => {
    const request = Request.Empty
    const response = Response.Empty

    request.cookie.Authorization = await createRefreshToken()

    await validateRefreshToken(request, response).then(() => chai.should().Throw)
  })

  it('만료시각이 지나면 에러가 발생한다', async () => {
    const request = Request.Empty
    const response = Response.Empty

    const refreshToken = new RefreshToken(SECRET_KEY)
    const issuedAt = Time()
      .subtract(7, 'day')
      .subtract(1, 'millisecond')
      .toDate()
    const expiredAt = Time(issuedAt)
      .add(7, 'day')
      .toDate()
    request.headers.Authorization = await refreshToken.encode({ id: 1 }, { issuedAt, expiredAt })

    const isValidated = await validateRefreshToken(request, response)
      .then(() => ({ isError: true }))
      .catch(() => ({ isError: false }))
    chai.assert.deepEqual(isValidated, { isError: false })
  })

  it('검증이 끝나면 Request 객체에 Auth 객체를 등록한다', async () => {
    const request = Request.Empty as import('../../types').Handler['request']
    const response = Response.Empty

    request.cookie.Authorization = await createRefreshToken()
    await validateRefreshToken(request, response)

    chai.expect(request.auth).to.be.instanceOf(Auth)
  })
})
