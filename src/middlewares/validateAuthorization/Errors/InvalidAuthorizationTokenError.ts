import { HttpError, StatusCode } from '../../../tools'

export class InvalidAuthorizationTokenError extends HttpError {
  readonly name = 'InvalidAuthorizationTokenError'
  readonly message = 'Invalid Authorization Token'
  readonly statusCode = StatusCode.UnAuthorized
}
