import { HttpError, StatusCode } from '../../../tools'

export class InvalidAccessTokenError extends HttpError {
  readonly name = 'InvalidAccessTokenError'
  readonly message = 'Invalid Access Token.'
  readonly statusCode = StatusCode.Forbidden
}
