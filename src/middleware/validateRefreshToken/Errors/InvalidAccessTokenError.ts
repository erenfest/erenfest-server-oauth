import { HttpError, StatusCode } from '../../../tools'

export class InvalidAccessTokenError extends HttpError {
  public readonly name = 'InvalidAccessTokenError'
  public readonly message = 'Invalid Access Token.'
  public readonly statusCode = StatusCode.Forbidden
}
