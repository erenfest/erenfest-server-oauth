import { HttpError } from '../../../Errors'
import { StatusCode } from '../../../StatusCode'

export class NoContentTypeError extends HttpError {
  readonly name = 'NoContentTypeError'
  readonly message = 'The header of the request must specify the content type'
  readonly statusCode = StatusCode.BadRequest
}
