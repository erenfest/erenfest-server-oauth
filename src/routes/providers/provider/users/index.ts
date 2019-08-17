import { Router } from 'express'

import { post } from './post'

export const users = Router({ mergeParams: true }).post('/', post)
