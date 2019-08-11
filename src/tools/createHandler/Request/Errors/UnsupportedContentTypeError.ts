import { HttpError } from '../../../Errors'
import { StatusCode } from '../../../StatusCode'

export class UnsupportedContentTypeError extends HttpError {
  readonly name = 'UnsupportedContentTypeError'
  readonly message = 'Only JSON and MessagePack formats are supported'
  readonly statusCode = StatusCode.BadRequest
}
