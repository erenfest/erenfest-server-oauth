import Time from 'dayjs'

import { createHandler, RefreshToken, AccessToken } from '../../../../../tools'
import { ProviderEnum } from '../../../../../constants'
import { UserModel } from '../../../../../models'

type Params = Readonly<{
  provider: ProviderEnum
}>

type Body = Readonly<{
  email: string
  password: string
  nickname: string
}>

const EmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PasswordPattern = /^\S{12,64}$/
const NicknamePattern = /^\S{3,24}$/

export const post = createHandler({
  validate(request, response) {
    const { email = '', password = '', nickname = '' } = request.body as Body
    if (!EmailPattern.test(email)) {
      throw new Error()
    } else if (!PasswordPattern.test(password)) {
      throw new Error()
    } else if (!NicknamePattern.test(nickname)) {
      throw new Error()
    }
  },
  async handle(request, response) {
    const { provider } = request.params as Params
    const { email, password, nickname } = request.body as Body
    const userModel = await createUser(provider, email, password, nickname)
    const authorization = await createAuthorization(provider, userModel.id)
    response.cookie('Authorization', authorization)
    response.json(authorization)
  }
})

const createUser = async (provider: ProviderEnum, email: string, password: string, nickname: string) => {
  try {
    const userModel = await UserModel.create({ provider, email, password, nickname })
    return userModel
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
