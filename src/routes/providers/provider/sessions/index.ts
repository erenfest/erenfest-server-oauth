import { Router } from 'express'

import { get } from './get'
import { post } from './post'

export const sessions = Router({ mergeParams: true })
  .get('/', get)
  .post('/', post)
