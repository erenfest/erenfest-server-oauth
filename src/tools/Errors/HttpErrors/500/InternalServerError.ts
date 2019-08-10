import { StatusCode } from '../../../StatusCode'
import { HttpError } from '../HttpError'

export class InternalServerError extends HttpError {
  readonly name = 'InternalServerError'
  readonly message = 'An unknown error has occurred inside the server.'
  readonly statusCode = StatusCode.InternalServerError
}
