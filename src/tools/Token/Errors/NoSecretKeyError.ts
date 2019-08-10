import { HttpError } from '../../Errors'
import { StatusCode } from '../../StatusCode'

export class NoSecretKeyError extends HttpError {
  public readonly name = 'NoSecretKeyError'
  public readonly message = 'You must set ACCESS_TOKEN_SECRET_KEY or REFRESH_TOKEN_SECRET_KEY in the environment variables'
  public readonly statusCode = StatusCode.Forbidden
}
