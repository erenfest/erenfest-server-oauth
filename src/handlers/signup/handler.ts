import { ProviderEnum } from '../../constants'
import { UserModel } from '../../models'
import { DuplicatedEmailError, DuplicatedNicknameError } from '../../tools'
import { NotSupportedProviderError, InvalidEmailError, InvalidPasswordError, InvalidNicknameError } from './Errors'

type Handler = import('../../types').Handler

type Body = Readonly<{
  provider: typeof ProviderList[number]
  email: string
  password: string
  nickname: string
}>

const ProviderList = [ProviderEnum.Erenfest] as const
const EmailPattern = /asd/
const PasswordPattern = /^\S{12,64}$/
const NicknamePattern = /^\S{3,24}$/

export const handler = async (request: Handler['request'], response: Handler['response']) => {
  const { provider, email, password, nickname } = request.body as Body
  if (ProviderList.includes(provider)) {
    throw new NotSupportedProviderError()
  } else if (EmailPattern.test(email || '')) {
    throw new InvalidEmailError()
  } else if (PasswordPattern.test(password || '')) {
    throw new InvalidPasswordError()
  } else if (NicknamePattern.test(nickname || '')) {
    throw new InvalidNicknameError()
  }

  await Promise.all([hasEmailByProvider(provider, email), hasNicknameByProvider(provider, nickname)]).then(([hasEmail, hasNickname]) => {
    if (hasEmail) {
      throw new DuplicatedEmailError()
    } else if (hasNickname) {
      throw new DuplicatedNicknameError()
    }
  })
}

const hasEmailByProvider = async (provider: ProviderEnum, email: string) => {
  const user = await UserModel.count({ where: { provider, email } })
  return !!user
}

const hasNicknameByProvider = async (provider: ProviderEnum, nickname: string) => {
  const user = await UserModel.count({ where: { provider, nickname } })
  return !!user
}
