import Time from 'dayjs'

import { ProviderEnum } from '../../constants'
import { UserModel, OAuthModel } from '../../models'
import { DuplicatedEmailError, DuplicatedNicknameError, RefreshToken, AccessToken } from '../../tools'
import { UnsupportedProviderError, InvalidEmailError, InvalidPasswordError, InvalidNicknameError } from './Errors'

type Handler = import('../../types').Handler

type Body = Readonly<{
  provider: typeof ProviderList[number]
  email: string
  password: string
  nickname: string
}>

const ProviderList = [ProviderEnum.Erenfest] as const
const EmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PasswordPattern = /^\S{12,64}$/
const NicknamePattern = /^\S{3,24}$/

export const handler = async (request: Handler['request'], response: Handler['response']) => {
  const { provider, email, password, nickname } = request.body as Body
  if (!ProviderList.includes(provider)) {
    throw new UnsupportedProviderError()
  } else if (!EmailPattern.test(email || '')) {
    throw new InvalidEmailError()
  } else if (!PasswordPattern.test(password || '')) {
    throw new InvalidPasswordError()
  } else if (!NicknamePattern.test(nickname || '')) {
    throw new InvalidNicknameError()
  }

  await Promise.all([hasEmailByProvider(provider, email), hasNicknameByProvider(provider, nickname)]).then(([hasEmail, hasNickname]) => {
    if (hasEmail) {
      throw new DuplicatedEmailError()
    } else if (hasNickname) {
      throw new DuplicatedNicknameError()
    }
  })

  const userModel = await UserModel.create(request.body)
  const oauthModel = await OAuthModel.create({ provider, authId: userModel.id, email })
  const authorizationToken = await createAuthorizationTokens(oauthModel.id, provider)

  response.cookie.setKey('Authorization', authorizationToken)
  response.body.update(authorizationToken)
}

const hasEmailByProvider = async (provider: typeof ProviderList[number], email: string) => {
  const user = await UserModel.findOne({ where: { provider, email } })
  return !!user
}

const hasNicknameByProvider = async (provider: typeof ProviderList[number], nickname: string) => {
  const user = await UserModel.count({ where: { provider, nickname } })
  return !!user
}

const createAuthorizationTokens = async (id: number, provider: typeof ProviderList[number]) => {
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
