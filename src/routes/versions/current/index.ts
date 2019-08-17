import { Router } from 'express'

import { version } from '../../../../package.json'

export const current = Router({ mergeParams: true }).get('/', (request, response) => {
  response.send(version)
})
