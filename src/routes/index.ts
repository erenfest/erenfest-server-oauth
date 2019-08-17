import { Router } from 'express'

import { versions } from './versions'
import { providers } from './providers'

export const routes = Router({ mergeParams: true })
  .use('/versions', versions)
  .use('/providers', providers)
