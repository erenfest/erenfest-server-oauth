import { HttpError, StatusCode } from '../../../tools'

export class NoAccessTokenError extends HttpError {
  public readonly name = 'NoAccessTokenError'
  public readonly message = 'This API requires an Access Token.'
  public readonly statusCode = StatusCode.UnAuthorized
}
