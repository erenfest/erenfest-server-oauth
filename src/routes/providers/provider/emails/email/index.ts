import { Router } from 'express'

import { get } from './get'

export const email = Router({ mergeParams: true }).get('/', get)
