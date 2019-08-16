import { ProviderEnum } from '../../constants'
import { UserModel } from '../../models'
import { UnsupportedProviderError, InvalidNicknameError } from './Errors'

type Handler = import('../../types').Handler

type Body = Readonly<{
  provider: typeof ProviderList[number]
  nickname: string
}>

const ProviderList = [ProviderEnum.Erenfest] as const
const nickanmePattern = /^\S{3,24}$/

export const handler = async (request: Handler['request'], response: Handler['response']) => {
  const { provider, nickname } = request.body as Body
  if (!ProviderList.includes(provider)) {
    throw new UnsupportedProviderError()
  } else if (!nickanmePattern.test(nickname || '')) {
    throw new InvalidNicknameError()
  }

  response.body.update(await hasNicknameByProvider(provider, nickname))
}

const hasNicknameByProvider = async (provider: typeof ProviderList[number], nickname: string) => {
  const userModel = await UserModel.count({ where: { provider, nickname } })
  return !!userModel
}
