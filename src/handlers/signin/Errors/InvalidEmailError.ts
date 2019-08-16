import { HttpError, StatusCode } from '../../../tools'

export class InvalidEmailError extends HttpError {
  readonly name = 'InvalidEmailError'
  readonly message = 'Not a valid email format'
  readonly statusCode = StatusCode.BadRequest
}
