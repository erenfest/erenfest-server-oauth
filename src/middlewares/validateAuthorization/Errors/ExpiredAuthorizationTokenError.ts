import { HttpError, StatusCode } from '../../../tools'

export class ExpiredAuthorizationTokenError extends HttpError {
  readonly name = 'ExpiredAuthorizationTokenError'
  readonly message = 'Authorization token is expired'
  readonly statusCode = StatusCode.UnAuthorized
}
