import { Request, Response, NextFunction } from 'express'

import { StatusCode } from '../StatusCode'

type Context = {
  context: any
}

type Handler = Readonly<{
  validate?: (request: Request & Context, response: Response) => void | Promise<void>
  handle: (request: Request & Context, response: Response) => void | Promise<void>
}>

export const createHandler = (handler: Handler) => async (preReqeust: Request & Context, response: Response, next: NextFunction) => {
  const request = Object.assign(preReqeust, { context: preReqeust.context || {} })
  Promise.resolve(handler.validate && handler.validate(request, response))
    .then(() => handler.handle(request, response))
    .then(next)
    .catch(currentError => {
      const error = currentError instanceof StatusCode ? currentError : StatusCode.InternalServerError
      response.status(error.statusCode)
      response.send({ error: error.raw })
    })
}
