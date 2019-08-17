import { createHandler } from '../../../../../../tools'
import { ProviderEnum } from '../../../../../../constants'
import { UserModel } from '../../../../../../models'

type Params = Readonly<{
  provider: ProviderEnum
  email: string
}>

const EmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const get = createHandler({
  validate(request, response) {
    const { email } = request.params as Params
    if (!EmailPattern.test(email)) {
      throw new Error()
    }
  },
  async handle(request, response) {
    const { provider, email } = request.params as Params
    const userModel = await UserModel.count({ where: { provider, email } }).catch(console.error)
    response.send(!!userModel)
  }
})
