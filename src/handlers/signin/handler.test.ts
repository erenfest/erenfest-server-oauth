import { validateRefreshToken } from '../../middleware'

describe.skip('signin', () => {
  const SECRET_KEY = 'Secret Key'
  validateRefreshToken.initialize(SECRET_KEY)

  describe('응답 검증', () => {
    it('cookie에 Refresh Token이 있다')

    it('cookie에 Access Token이 있다')

    it('body에 Refresh Token이 있다')

    it('body에 Access Token이 있다')
  })
})
