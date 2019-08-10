import { HttpError, StatusCode } from '../../../tools'

export class ExpiredTokenError extends HttpError {
  readonly name = 'ExpiredTokenError'
  readonly message = 'The token is expired'
  readonly statusCode = StatusCode.Forbidden
}
