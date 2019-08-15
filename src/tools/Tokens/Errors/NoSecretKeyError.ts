import { HttpError } from '../../Errors'
import { StatusCode } from '../../StatusCode'

export class NoSecretKeyError extends HttpError {
  readonly name = 'NoSecretKeyError'
  readonly message = 'You must set ACCESS_TOKEN_SECRET_KEY or REFRESH_TOKEN_SECRET_KEY in the environment variables'
  readonly statusCode = StatusCode.Forbidden
}
