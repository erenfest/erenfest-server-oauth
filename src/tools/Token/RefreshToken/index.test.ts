import * as chai from 'chai'
import Time from 'dayjs'

import { Payload } from '../types'
import { RefreshToken, RefreshTokenData } from './index'

describe('Refresh Token', () => {
  it('Secret Key가 falsy하면 에러가 발생한다', () => {
    chai.should().throw(() => new RefreshToken(''))
    chai.should().throw(() => new RefreshToken(undefined as any))
    chai.should().throw(() => new RefreshToken(null as any))
    chai.should().throw(() => new RefreshToken(false as any))
    chai.should().throw(() => new RefreshToken(0 as any))
  })

  it('토큰 생성은 함수형으로 작동한다', async () => {
    const issuedAt = Time('2019-01-01T00:00:00.000Z').toDate()
    const expiredAt = Time('2019-01-08T00:00:00.000Z').toDate()

    const refreshToken = new RefreshToken('SECRET_KEY')
    const token = await refreshToken.encode({ id: 1 }, { issuedAt, expiredAt })

    const EXPECTED_TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDYzMDA4MDAwMDAsImV4cCI6MTU0NjkwNTYwMDAwMCwiZGF0YSI6eyJpZCI6MX19.pQPSaQL94evi_lIW9HLE6fk77QmyJaN4KiBJ8fum-eI'
    chai.expect(token).to.be.equals(EXPECTED_TOKEN)
  })

  it('header/payload/signature를 dot로 구분한다', async () => {
    const issuedAt = Time().toDate()
    const expiredAt = Time(issuedAt)
      .add(7, 'day')
      .toDate()

    const refreshToken = new RefreshToken('SECRET_KEY')
    const token = await refreshToken.encode({ id: 1 }, { issuedAt, expiredAt })

    chai.expect(token).to.be.match(/^[\w-]+\.[\w-]+\.[\w-]+$/)
  })

  it('secret key가 다르면 data가 같아도 토큰이 다르다', async () => {
    const issuedAt = Time().toDate()
    const expiredAt = Time(issuedAt)
      .add(7, 'day')
      .toDate()

    const refreshToken1 = new RefreshToken('SECRET_KEY_1')
    const refreshToken2 = new RefreshToken('SECRET_KEY_2')

    const token1 = await refreshToken1.encode({ id: 1 }, { issuedAt, expiredAt })
    const token2 = await refreshToken2.encode({ id: 1 }, { issuedAt, expiredAt })

    chai.should().not.equal(token1, token2)
  })

  it('정상적으로 생성한 토큰은 복호화가 가능하다', async () => {
    const issuedAt = Time().toDate()
    const expiredAt = Time(issuedAt)
      .add(7, 'day')
      .toDate()

    const refreshToken = new RefreshToken('SECRET_KEY')
    const token = await refreshToken.encode({ id: 1 }, { issuedAt, expiredAt })
    const payload = await refreshToken.decode(token)

    const EXPECTED_PAYLOAD: Payload<RefreshTokenData> = {
      iat: issuedAt.getTime(),
      exp: expiredAt.getTime(),
      data: { id: 1 }
    }
    chai.expect(payload).to.be.deep.equals(EXPECTED_PAYLOAD)
  })
})
