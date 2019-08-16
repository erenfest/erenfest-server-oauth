import { HttpError, StatusCode } from '../../../tools'

export class UnsupportedProviderError extends HttpError {
  readonly name = 'UnsupportedProviderError'
  readonly message = 'UnsupportedProviderError'
  readonly statusCode = StatusCode.BadRequest
}
