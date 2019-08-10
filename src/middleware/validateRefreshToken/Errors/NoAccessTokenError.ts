import { HttpError, StatusCode } from '../../../tools'

export class NoAccessTokenError extends HttpError {
  readonly name = 'NoAccessTokenError'
  readonly message = 'This API requires an Access Token.'
  readonly statusCode = StatusCode.UnAuthorized
}
