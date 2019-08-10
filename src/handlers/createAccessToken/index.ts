import { createHandler } from '../../tools'
import { handler } from './handler'

export const createAccessToken = createHandler(handler)
