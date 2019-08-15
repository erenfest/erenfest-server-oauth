import { StatusCode } from '../../StatusCode'
import { HttpError } from '../HttpErrors/HttpError'

export class DuplicatedEmailError extends HttpError {
  readonly name = 'DuplicatedEmailError'
  readonly message = 'error'
  readonly statusCode = StatusCode.BadRequest
}
