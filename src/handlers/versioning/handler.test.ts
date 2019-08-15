import chai from 'chai'

import { version } from '../../../package.json'
import { Request, Response } from '../../tools'
import { handler } from './handler'

type Handler = import('../../types').Handler

describe('versioning', () => {
  describe('응답 검증', () => {
    it('body에 현재 버전을 담고 있다', async () => {
      const request = Request.Empty as Handler['request']
      const response = Response.Empty

      await handler(request, response)

      chai.should().equal(response.body.raw, version)
    })
  })
})
