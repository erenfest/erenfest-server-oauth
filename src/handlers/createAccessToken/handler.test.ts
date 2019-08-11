import { validateRefreshToken } from '../../middleware'

describe.skip('createAccessToken', () => {
  const SECRET_KEY = 'Secret Key'
  validateRefreshToken.initialize(SECRET_KEY)

  describe('응답 검증', () => {
    it('cookie에 Access Token이 있다')

    it('body에 Access Token이 있다')

    it('Access Token은 6시간 후에 만료한다')
  })
})
