import { StatusCode } from '../../StatusCode'
import { HttpError } from '../HttpErrors/HttpError'

export class DuplicatedNicknameError extends HttpError {
  readonly name = 'DuplicatedNicknameError'
  readonly message = 'error'
  readonly statusCode = StatusCode.BadRequest
}
