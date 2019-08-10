import { HttpError, StatusCode } from '../../../tools'

export class ExpiredTokenError extends HttpError {
  public readonly name = 'ExpiredTokenError'
  public readonly message = 'The token is expired'
  public readonly statusCode = StatusCode.Forbidden
}
