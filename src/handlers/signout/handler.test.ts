import { validateRefreshToken } from '../../middleware'

describe.skip('signout', () => {
  const SECRET_KEY = 'Secret Key'
  validateRefreshToken.initialize(SECRET_KEY)

  describe('응답 검증', () => {
    it('cookie에 Authorization 필드를 제거하는 코드가 있다')
  })
})
