import { ApiGatewayEvent, Packet } from '../../types'
import { HttpError, InternalServerError } from '../Errors'
import { StatusCode } from '../StatusCode'
import { Request } from './Request'
import { Response } from './Response'

export { Request } from './Request'
export { Response, Header, Cookie } from './Response'

type Handler = (request: Request, response: Response) => void | Promise<void>

export const createHandler = (...handlerList: readonly Handler[]) => async (event: ApiGatewayEvent, _context: any) => {
  const request = Request.from(event)
  const response = Response.Empty
  let packet: null | Packet = null
  try {
    for (const handler of handlerList) {
      await handler(request, response)
    }
    packet = response.toPacket()
  } catch (error) {
    const response = error instanceof HttpError ? Response.fromError(error) : Response.create(StatusCode.InternalServerError, error)
    packet = response.toPacket()
  } finally {
    return packet || Response.fromError(new InternalServerError()).toPacket()
  }
}
