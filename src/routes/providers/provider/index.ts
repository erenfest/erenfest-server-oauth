import { Router, Request, Response, NextFunction } from 'express'

import { ProviderEnum } from '../../../constants'
import { emails } from './emails'
import { nicknames } from './nicknames'
import { sessions } from './sessions'
import { users } from './users'
import { InvalidProviderError } from './Errors'

const validateProvider = (request: Request, response: Response, next: NextFunction) => {
  if (!ProviderEnum[request.params.provider]) {
    throw new InvalidProviderError()
  }
  next()
}

export const provider = Router({ mergeParams: true })
  .use(validateProvider)
  .use('/emails', emails)
  .use('/nicknames', nicknames)
  .use('/sessions', sessions)
  .use('/users', users)
