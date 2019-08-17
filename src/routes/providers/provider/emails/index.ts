import { Router } from 'express'

import { email } from './email'

export const emails = Router({ mergeParams: true }).use('/:email', email)
