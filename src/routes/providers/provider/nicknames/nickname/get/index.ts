import { createHandler } from '../../../../../../tools'
import { ProviderEnum } from '../../../../../../constants'
import { UserModel } from '../../../../../../models'

type Params = Readonly<{
  provider: ProviderEnum
  nickname: string
}>

const NicknamePattern = /^\S{3,24}$/

export const get = createHandler({
  validate(request, response) {
    const { nickname } = request.params as Params
    if (!NicknamePattern.test(nickname)) {
      throw new Error()
    }
  },
  async handle(request, response) {
    const { provider, nickname } = request.params as Params
    const userModel = await UserModel.count({ where: { provider, nickname } })
    response.send(!!userModel)
  }
})
