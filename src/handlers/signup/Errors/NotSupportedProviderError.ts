import { HttpError, StatusCode } from '../../../tools'

export class NotSupportedProviderError extends HttpError {
  readonly name = 'NotSupportedProviderError'
  readonly message = 'NotSupportedProviderError'
  readonly statusCode = StatusCode.BadRequest
}
