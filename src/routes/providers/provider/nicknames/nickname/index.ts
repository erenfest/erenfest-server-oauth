import { Router } from 'express'

import { get } from './get'

export const nickname = Router({ mergeParams: true }).get('/', get)
