import { version } from '../../../package.json'

type Handler = import('../../types').Handler

export const handler = async (request: Handler['request'], response: Handler['response']) => {
  response.body.update(version)
}
