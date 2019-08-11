import { StatusCode } from '../../../StatusCode'
import { HttpError } from '../HttpError'

export class NotImplementedError extends HttpError {
  readonly name = 'NotImplementedError'
  readonly message = ''
  readonly statusCode = StatusCode.NotImplemented
}
