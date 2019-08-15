import * as chai from 'chai'

import { ProviderEnum } from '../../../constants'
import { Payload } from '../types'
import { AccessToken, AccessTokenData, AccessTokenOption } from './index'

describe('Access Token', () => {
  const CREATE_DATA = (): AccessTokenData => ({ id: 1, provider: ProviderEnum.Erenfest })

  it('토큰 생성은 함수형으로 작동한다', async () => {
    const DATA = CREATE_DATA()
    const OPTION: AccessTokenOption = { issuedAt: new Date(2019, 0, 1, 0, 0, 0, 0) }

    const token = await AccessToken.encode(DATA, OPTION)

    const EXPECTED_TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDYyNjg0MDAwMDAsImRhdGEiOnsiaWQiOjEsInByb3ZpZGVyIjoiRXJlbmZlc3QifSwiZXhwIjoxNTQ2MjY4NDIxNjAwfQ._YdJYorLxRvtgO9FEAI1tSr1i9ipY5IsL8ZAxOJqqpU'
    chai.expect(token).to.be.equals(EXPECTED_TOKEN)
  })

  it('header/payload/signature를 dot로 구분한다', async () => {
    const DATA = CREATE_DATA()
    const OPTION: AccessTokenOption = { issuedAt: new Date(2019, 0, 1, 0, 0, 0, 0) }

    const token = await AccessToken.encode(DATA, OPTION)

    chai.expect(token).to.be.match(/^[\w-]+\.[\w-]+\.[\w-]+$/)
  })

  it('정상적으로 생성한 토큰은 복호화가 가능하다', async () => {
    const DATA = CREATE_DATA()
    const OPTION: AccessTokenOption = { issuedAt: new Date(2019, 0, 1, 0, 0, 0, 0) }

    const token = await AccessToken.encode(DATA, OPTION)
    const payload = await AccessToken.decode(token)

    const EXPECTED_PAYLOAD: Payload<AccessTokenData> = {
      iat: 1546268400000,
      exp: 1546268421600,
      data: DATA
    }
    chai.expect(payload).to.be.deep.equals(EXPECTED_PAYLOAD)
  })
})
