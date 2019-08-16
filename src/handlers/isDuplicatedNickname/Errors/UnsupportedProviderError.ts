import { HttpError, StatusCode } from '../../../tools'

export class UnsupportedProviderError extends HttpError {
  readonly name = 'UnsupportedProviderError'
  readonly message = 'Not a valid email format'
  readonly statusCode = StatusCode.BadRequest
}
