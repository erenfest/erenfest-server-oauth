import Cookie from 'cookie'

import { ApiGatewayEvent } from '../../../types'
import { ContentTypeEnum } from '../../../constants'
import { NotImplementedError } from '../../Errors'
import { UnsupportedContentTypeError, NoContentTypeError, FormatParsingError } from './Errors'

const SupportContentTypeList = Object.values(ContentTypeEnum)

export class Request {
  static get Empty() {
    return new Request({
      path: '',
      httpMethod: 'get',
      headers: {
        'Content-Type': ContentTypeEnum.Json
      },
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
  readonly body: Record<string, any>

  private constructor({ path, httpMethod, headers, queryStringParameters, body }: ApiGatewayEvent) {
    const { cookie = '', ...restHeaders } = Object.entries(headers || {}).reduce(
      (result, [key, value]) => {
        result[key.toLowerCase()] = value
        return result
      },
      {} as Record<string, any>
    )
    const contentType = restHeaders['content-type'] as string
    if (!contentType) {
      throw new NoContentTypeError()
    }

    if (!SupportContentTypeList.includes(contentType)) {
      throw new UnsupportedContentTypeError()
    }

    this.path = path
    this.method = httpMethod
    this.headers = restHeaders
    this.query = queryStringParameters
    this.cookie = Cookie.parse(cookie)

    switch (contentType) {
      case ContentTypeEnum.Json: {
        try {
          this.body = JSON.parse(body!)
          break
        } catch {
          throw new FormatParsingError()
        }
      }
      case ContentTypeEnum.MessagePack: {
        throw new NotImplementedError()
      }
    }
  }
}
