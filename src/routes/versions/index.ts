import { Router } from 'express'

import { current } from './current'

export const versions = Router({ mergeParams: true }).use('/current', current)
