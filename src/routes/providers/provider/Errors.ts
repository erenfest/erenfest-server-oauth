import { HttpError, StatusCode } from '../../../tools'

export class InvalidProviderError extends HttpError {
  readonly name = 'InvalidProviderError'
  readonly message = 'InvalidProviderError'
  readonly statusCode = StatusCode.BadRequest
}
