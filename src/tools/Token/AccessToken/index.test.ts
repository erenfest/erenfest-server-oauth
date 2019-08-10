import * as chai from 'chai'

import { PROVIDER } from '../../../constants'
import { Payload } from '../types'
import { AccessToken, AccessTokenData, AccessTokenOption } from './index'

describe('Access Token', () => {
  const CREATE_DATA = (): AccessTokenData => ({ id: 1, provider: PROVIDER.ERENFEST, oauthId: '' })

  it('Secret Key가 falsy하면 에러가 발생한다', () => {
    chai.should().throw(() => new AccessToken(''))
    chai.should().throw(() => new AccessToken(undefined as any))
    chai.should().throw(() => new AccessToken(null as any))
    chai.should().throw(() => new AccessToken(false as any))
    chai.should().throw(() => new AccessToken(0 as any))
  })

  it('토큰 생성은 함수형으로 작동한다', async () => {
    const DATA = CREATE_DATA()
    const OPTION: AccessTokenOption = { issuedAt: new Date(2019, 0, 1, 0, 0, 0, 0) }

    const accessToken = new AccessToken('SECRET_KEY')
    const token = await accessToken.encode(DATA, OPTION)

    const EXPECTED_TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDYyNjg0MDAwMDAsImRhdGEiOnsiaWQiOjEsInByb3ZpZGVyIjoiRXJlbmZlc3QiLCJvYXV0aElkIjoiIn0sImV4cCI6MTU0NjI2ODQyMTYwMH0.BKs8gxiMvbFIvXa_earM-K2VeDb4YaatBFkz9omaGrI'
    chai.expect(token).to.be.equals(EXPECTED_TOKEN)
  })

  it('header/payload/signature를 dot로 구분한다', async () => {
    const DATA = CREATE_DATA()

    const accessToken = new AccessToken('SECRET_KEY')
    const token = await accessToken.encode(DATA)

    chai.expect(token).to.be.match(/^[\w-]+\.[\w-]+\.[\w-]+$/)
  })

  it('secret key가 다르면 data가 같아도 토큰이 다르다', async () => {
    const DATA = CREATE_DATA()
    const OPTION: AccessTokenOption = { issuedAt: new Date(2019, 0, 1) }

    const refreshToken1 = new AccessToken('SECRET_KEY_1')
    const refreshToken2 = new AccessToken('SECRET_KEY_2')

    const token1 = await refreshToken1.encode(DATA, OPTION)
    const token2 = await refreshToken2.encode(DATA, OPTION)

    chai.should().not.equal(token1, token2)
  })

  it('정상적으로 생성한 토큰은 복호화가 가능하다', async () => {
    const DATA = CREATE_DATA()
    const OPTION: AccessTokenOption = { issuedAt: new Date(2019, 0, 1, 0, 0, 0, 0) }

    const accessToken = new AccessToken('SECRET_KEY')

    const token = await accessToken.encode(DATA, OPTION)
    const payload = await accessToken.decode(token)

    const EXPECTED_PAYLOAD: Payload<AccessTokenData> = {
      iat: 1546268400000,
      exp: 1546268421600,
      data: DATA
    }
    chai.expect(payload).to.be.deep.equals(EXPECTED_PAYLOAD)
  })
})
