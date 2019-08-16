import Time from 'dayjs'

import { RefreshToken } from '../../tools'
import { NoAuthorizationTokenError, InvalidAuthorizationTokenError, ExpiredAuthorizationTokenError } from './Errors'

type Handler = import('../../types').Handler

export const handler = async (request: Handler['request'], response: Handler['response']) => {
  const authorizationToken = request.cookie.Authorization || request.headers.Authorization
  if (!authorizationToken) {
    throw new NoAuthorizationTokenError()
  }

  const authorization = serializeAuthorizationToken(authorizationToken)
  const refreshToken = await RefreshToken.decode(authorization.refreshToken)
  if (!Time().isBefore(refreshToken.exp)) {
    throw new ExpiredAuthorizationTokenError()
  }

  Object.assign(request, { auth: { refreshToken } })
}

const serializeAuthorizationToken = (authorizationToken: string) => {
  try {
    return JSON.parse(authorizationToken)
  } catch {
    throw new InvalidAuthorizationTokenError()
  }
}
