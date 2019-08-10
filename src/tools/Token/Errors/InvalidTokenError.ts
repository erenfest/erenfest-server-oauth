import { HttpError } from '../../Errors'
import { StatusCode } from '../../StatusCode'

export class InvalidTokenError extends HttpError {
  readonly name = 'InvalidTokenError'
  readonly message = 'InvalidTokenError'
  readonly statusCode = StatusCode.UnAuthorized
}
