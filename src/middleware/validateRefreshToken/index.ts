import { Request, Response, RefreshToken } from '../../tools'
import { NoAccessTokenError, ExpiredTokenError } from './Errors'
import { Auth } from './Auth'

let refreshToken!: RefreshToken

export const validateRefreshToken = async (request: Request, response: Response) => {
  const authorizationToken = request.cookie.Authorization || request.headers.Authorization
  if (!authorizationToken) {
    throw new NoAccessTokenError()
  }

  const payload = Auth.from(await refreshToken.decode(authorizationToken))
  const isExpired = payload.expiredAt.isBefore(new Date())
  if (isExpired) {
    throw new ExpiredTokenError()
  }

  Object.assign(request, { auth: payload })
}

validateRefreshToken.initialize = (secretKey: string) => {
  refreshToken = new RefreshToken(secretKey)
}
