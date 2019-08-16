import { createHandler } from '../../tools'
import { handler } from './handler'

export const isDuplicatedNickname = createHandler(handler)
