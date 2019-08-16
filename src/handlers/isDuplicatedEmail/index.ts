import { createHandler } from '../../tools'
import { handler } from './handler'

export const isDuplicatedEmail = createHandler(handler)
