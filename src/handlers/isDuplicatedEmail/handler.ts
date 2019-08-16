import { ProviderEnum } from '../../constants'
import { OAuthModel } from '../../models'
import { UnsupportedProviderError, InvalidEmailError } from './Errors'

type Handler = import('../../types').Handler

type Body = Readonly<{
  provider: typeof ProviderList[number]
  email: string
}>

const ProviderList = [ProviderEnum.Erenfest] as const
const EmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const handler = async (request: Handler['request'], response: Handler['response']) => {
  const { provider, email } = request.body as Body
  if (!ProviderList.includes(provider)) {
    throw new UnsupportedProviderError()
  } else if (!EmailPattern.test(email || '')) {
    throw new InvalidEmailError()
  }

  response.body.update(await hasEmailByProvider(provider, email))
}

const hasEmailByProvider = async (provider: typeof ProviderList[number], email: string) => {
  const oauthModel = await OAuthModel.count({ where: { provider, email } })
  return !!oauthModel
}
