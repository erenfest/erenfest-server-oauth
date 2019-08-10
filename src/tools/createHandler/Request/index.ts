import Cookie from 'cookie'

import { ApiGatewayEvent } from '../../../types'

export class Request {
  static get Empty() {
    return new Request({
      path: '',
      httpMethod: 'get',
      headers: null,
      queryStringParameters: null,
      body: null
    })
  }

  static from(event: ApiGatewayEvent) {
    return new Request(event)
  }

  readonly path: ApiGatewayEvent['path']
  readonly method: ApiGatewayEvent['httpMethod']
  readonly query: ApiGatewayEvent['queryStringParameters']
  readonly headers: ApiGatewayEvent['headers']
  readonly cookie: Record<string, any>
  readonly body: ApiGatewayEvent['body']

  private constructor({ path, httpMethod, headers, queryStringParameters, body }: ApiGatewayEvent) {
    const { cookie = '', ...restHeaders } = headers || {}

    this.path = path
    this.method = httpMethod
    this.headers = restHeaders
    this.query = queryStringParameters
    this.cookie = Cookie.parse(cookie)
    this.body = body
  }
}
