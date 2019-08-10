import { HttpError } from '../../Errors'
import { StatusCode } from '../../StatusCode'

export class InvalidTokenError extends HttpError {
  public readonly name = 'InvalidTokenError'
  public readonly message = 'InvalidTokenError'
  public readonly statusCode = StatusCode.UnAuthorized
}
