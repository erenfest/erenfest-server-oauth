import { validateRefreshToken } from '../../middleware'

describe.skip('signup', () => {
  const SECRET_KEY = 'Secret Key'
  validateRefreshToken.initialize(SECRET_KEY)

  describe('요청 검증', () => {
    it('제공자provider가 있는지 확인한다')

    it('아이디가 있는지 확인한다')

    it('암호가 있는지 확인한다')

    it('이메일이 있는지 확인한다')

    it('정책 동의 리스트가 있는지 확인한다')
  })

  describe('응답 검증', () => {
    it('cookie에 Refresh Token이 있다')

    it('cookie에 Access Token이 있다')

    it('body에 Refresh Token이 있다')

    it('body에 Access Token이 있다')
  })
})
