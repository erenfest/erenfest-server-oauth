import Time from 'dayjs'

import { ProviderEnum } from '../../constants'
import { OAuthModel } from '../../models'
import { RefreshToken, AccessToken } from '../../tools'
import { UnsupportedProviderError, InvalidEmailError, InvalidPasswordError, NoAccountError } from './Errors'

type Handler = import('../../types').Handler

type Body = Readonly<{
  provider: typeof ProviderList[number]
  email: string
  password: string
}>

const ProviderList = [ProviderEnum.Erenfest] as const
const EmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PasswordPattern = /^\S{12,64}$/

export const handler = async (request: Handler['request'], response: Handler['response']) => {
  const { provider, email, password } = request.body as Body
  if (!ProviderList.includes(provider)) {
    throw new UnsupportedProviderError()
  } else if (!EmailPattern.test(email || '')) {
    throw new InvalidEmailError()
  } else if (!PasswordPattern.test(password || '')) {
    throw new InvalidPasswordError()
  }

  const oauthModel = await findOAuthByProvider(provider, email)
  const authorizationToken = await createAuthorizationTokens(oauthModel.id, provider)

  response.cookie.setKey('Authorization', authorizationToken)
  response.body.update(authorizationToken)
}

const findOAuthByProvider = async (provider: typeof ProviderList[number], email: string) => {
  const oauthModel = await OAuthModel.findOne({ where: { provider, email } })
  if (!oauthModel) {
    throw new NoAccountError()
  }
  return oauthModel
}

const createAuthorizationTokens = async (id: number, provider: ProviderEnum) => {
  const issuedAt = new Date()
  const [refreshToken, accessToken] = await Promise.all([
    RefreshToken.encode(
      { id },
      {
        issuedAt,
        expiredAt: Time(issuedAt)
          .add(7, 'day')
          .toDate()
      }
    ),
    AccessToken.encode({ id, provider }, { issuedAt })
  ])
  return JSON.stringify({ refreshToken, accessToken })
}
