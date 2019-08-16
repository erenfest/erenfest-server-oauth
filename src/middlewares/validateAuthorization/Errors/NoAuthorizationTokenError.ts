import { HttpError, StatusCode } from '../../../tools'

export class NoAuthorizationTokenError extends HttpError {
  readonly name = 'NoAuthorizationTokenError'
  readonly message = 'Authorization token is required'
  readonly statusCode = StatusCode.Forbidden
}
