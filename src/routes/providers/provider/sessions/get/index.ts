import Time from 'dayjs'

import { createHandler, RefreshToken, AccessToken } from '../../../../../tools'
import { ProviderEnum } from '../../../../../constants'

type Context = Readonly<{
  refreshToken: ReturnType<typeof serializeAuthorizationToken> extends Promise<infer T> ? T : never
}>

export const get = createHandler({
  async validate(request, response) {
    const authorizationToken: string = request.cookies.authorization || request.headers.Authorization
    if (!authorizationToken) {
      throw new Error()
    }
    const refreshToken = await serializeAuthorizationToken(authorizationToken)
    if (Time(refreshToken.exp).isBefore(new Date())) {
      throw new Error()
    }
    request.context.refreshToken = refreshToken
  },
  async handle(request, response) {
    const { refreshToken } = request.context as Context
    const { provider, id } = refreshToken.data
    const authorization = await createAuthorization(provider, id)
    response.cookie('Authorization', authorization)
    response.send(authorization)
  }
})

const serializeAuthorizationToken = async (authorizationToken: string) => {
  try {
    const authorization = JSON.parse(decodeURIComponent(authorizationToken))
    const refreshToken = await RefreshToken.decode(authorization.refreshToken)
    return refreshToken
  } catch {
    throw new Error()
  }
}

const createAuthorization = async (provider: ProviderEnum, id: number) => {
  const issuedAt = new Date()
  const [refreshToken, accessToken] = await Promise.all([
    RefreshToken.encode(
      { provider, id },
      {
        issuedAt,
        expiredAt: Time(issuedAt)
          .add(7, 'day')
          .toDate()
      }
    ),
    AccessToken.encode({ id, provider }, { issuedAt })
  ])
  return encodeURIComponent(JSON.stringify({ refreshToken, accessToken }))
}
