import { StatusCode } from '../../../StatusCode'
import { HttpError } from '../HttpError'

export class InternalServerError extends HttpError {
  public readonly name = 'InternalServerError'
  public readonly message = 'An unknown error has occurred inside the server.'
  public readonly statusCode = StatusCode.InternalServerError
}
