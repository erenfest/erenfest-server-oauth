import { HttpError, StatusCode } from '../../../tools'

export class InvalidPasswordError extends HttpError {
  readonly name = 'InvalidPasswordError'
  readonly message = 'Password must be at least 12 characters'
  readonly statusCode = StatusCode.BadRequest
}
