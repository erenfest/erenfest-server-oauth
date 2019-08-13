import { HttpError, StatusCode } from '../../../tools'

export class InvalidNicknameError extends HttpError {
  readonly name = 'InvalidNicknameError'
  readonly message = 'Nickname should be between 3 and 24 characters'
  readonly statusCode = StatusCode.BadRequest
}
