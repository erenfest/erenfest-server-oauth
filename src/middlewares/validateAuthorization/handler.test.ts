import chai from 'chai'

import { Request, Response } from '../../tools'
import { handler } from './handler'

describe('validateAuthorization', () => {
  let request: import('../../types').Handler['request']
  let response: import('../../types').Handler['response']

  before(async () => {
    request = Request.Empty as import('../../types').Handler['request']
    response = Response.Empty as import('../../types').Handler['response']
  })

  it('Authorization 토큰이 있는지 확인한다', async () => {
    const isValidated = await handler(request, response)
      .then(() => ({ isError: false }))
      .catch(() => ({ isError: false }))

    chai.assert.deepEqual(isValidated, { isError: false })
  })

  it('Authorization 토큰이 올바른지 확인한다', async () => {
    Object.assign(request, { cookie: { Authorization: JSON.stringify({ refreshToken: 'fake' }) } })

    const isValidated = await handler(request, response)
      .then(() => ({ isError: true }))
      .catch(() => ({ isError: false }))

    chai.assert.deepEqual(isValidated, { isError: false })
  })

  it('Refresh 토큰이 만료했는지 확인한다')
})
