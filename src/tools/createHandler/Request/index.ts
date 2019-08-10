import Cookie from 'cookie'

import { ApiGatewayEvent } from '../../../types'

export class Request {
  public static get Empty() {
    return new Request({
      path: '',
      httpMethod: 'get',
      headers: null,
      queryStringParameters: null,
      body: null
    })
  }

  public static from(event: ApiGatewayEvent) {
    return new Request(event)
  }

  public readonly headers: Record<string, any>
  public readonly cookie: Record<string, any>

  private constructor(private readonly event: ApiGatewayEvent) {
    const { cookie = '', ...headers } = event.headers || {}
    this.headers = headers
    this.cookie = Cookie.parse(cookie)
  }

  public get path() {
    return this.event.path
  }

  public get method() {
    return this.event.httpMethod
  }

  public get query() {
    return this.event.queryStringParameters
  }

  public get body() {
    return this.event.body
  }
}
