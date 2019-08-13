import { validateRefreshToken } from '../../middleware'

describe.skip('signup', () => {
  const SECRET_KEY = 'Secret Key'
  validateRefreshToken.initialize(SECRET_KEY)

  it('제공자provider가 있는지 확인한다')

  it('아이디가 있는지 확인한다')

  it('암호가 있는지 확인한다')

  it('이메일이 있는지 확인한다')

  it('정책 동의 리스트가 있는지 확인한다')

  it('해당 제공자에 중복 이메일인지 확인힌다')

  it('해당 제공자에 중복 별칭이 있는지 확인한다')

  it('cookie에 Refresh Token이 있다')

  it('cookie에 Access Token이 있다')

  it('body에 Refresh Token이 있다')

  it('body에 Access Token이 있다')
})
