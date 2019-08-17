import { Router } from 'express'

import { provider } from './provider'

export const providers = Router({ mergeParams: true }).use('/:provider', provider)
