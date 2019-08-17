import { Router } from 'express'

import { nickname } from './nickname'

export const nicknames = Router({ mergeParams: true }).use('/:nickname', nickname)
