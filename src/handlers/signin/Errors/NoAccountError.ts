import { HttpError, StatusCode } from '../../../tools'

export class NoAccountError extends HttpError {
  readonly name = 'NoAccountError'
  readonly message = 'No email in provider'
  readonly statusCode = StatusCode.Forbidden
}
