import { Packet } from '../../../types'
import { HttpError } from '../../Errors'
import { StatusCode } from '../../StatusCode'
import { Header } from './Header'
import { Cookie } from './Cookie'
import { Body } from './Body'

export { Header } from './Header'
export { Cookie } from './Cookie'

export class Response {
  public static get Empty() {
    return new Response(StatusCode.Ok)
  }

  public static create(statusCode: StatusCode, body: any, headers?: Header) {
    return new Response(statusCode, Body.create(body), headers)
  }

  public static redirect(headers: Header) {
    return new Response(StatusCode.TemporaryRedirect, Body.Empty, headers)
  }

  public static fromError({ name, message, statusCode }: HttpError) {
    return new Response(statusCode, Body.create({ name, message }))
  }

  public readonly cookie = Cookie.Empty

  private constructor(public statusCode = StatusCode.Ok, public body = Body.Empty, public headers = Header.Empty) {}

  public toPacket(): Packet {
    const { statusCode, headers, cookie, body } = this
    const multiValueHeaders = headers.toRaw()
    if (!cookie.isEmpty) {
      multiValueHeaders['Set-Cookie'] = cookie.toRaw()
    }
    return {
      statusCode: statusCode.statusCode,
      multiValueHeaders,
      body: body.raw
    }
  }
}