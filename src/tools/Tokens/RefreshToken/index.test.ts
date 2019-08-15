import * as chai from 'chai'
import Time from 'dayjs'

import { Payload } from '../types'
import { RefreshToken, RefreshTokenData } from './index'

describe('Refresh Token', () => {
  it('토큰 생성은 함수형으로 작동한다', async () => {
    const issuedAt = Time('2019-01-01T00:00:00.000Z').toDate()
    const expiredAt = Time('2019-01-08T00:00:00.000Z').toDate()

    const token = await RefreshToken.encode({ id: 1 }, { issuedAt, expiredAt })

    const EXPECTED_TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDYzMDA4MDAwMDAsImV4cCI6MTU0NjkwNTYwMDAwMCwiZGF0YSI6eyJpZCI6MX19.pQPSaQL94evi_lIW9HLE6fk77QmyJaN4KiBJ8fum-eI'
    chai.expect(token).to.be.equals(EXPECTED_TOKEN)
  })

  it('header/payload/signature를 dot로 구분한다', async () => {
    const issuedAt = Time().toDate()
    const expiredAt = Time(issuedAt)
      .add(7, 'day')
      .toDate()

    const token = await RefreshToken.encode({ id: 1 }, { issuedAt, expiredAt })

    chai.expect(token).to.be.match(/^[\w-]+\.[\w-]+\.[\w-]+$/)
  })

  it('정상적으로 생성한 토큰은 복호화가 가능하다', async () => {
    const issuedAt = Time().toDate()
    const expiredAt = Time(issuedAt)
      .add(7, 'day')
      .toDate()

    const token = await RefreshToken.encode({ id: 1 }, { issuedAt, expiredAt })
    const payload = await RefreshToken.decode(token)

    const EXPECTED_PAYLOAD: Payload<RefreshTokenData> = {
      iat: issuedAt.getTime(),
      exp: expiredAt.getTime(),
      data: { id: 1 }
    }
    chai.expect(payload).to.be.deep.equals(EXPECTED_PAYLOAD)
  })
})
