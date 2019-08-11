import { HttpError } from '../../../Errors'
import { StatusCode } from '../../../StatusCode'

export class FormatParsingError extends HttpError {
  readonly name = 'FormatParsingError'
  readonly message = 'Not a valid format'
  readonly statusCode = StatusCode.BadRequest
}
