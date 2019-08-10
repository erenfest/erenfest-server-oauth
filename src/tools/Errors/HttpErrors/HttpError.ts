import { StatusCode } from '../../StatusCode'
import { BaseError } from '../BaseError'

export abstract class HttpError extends BaseError {
  abstract readonly statusCode: StatusCode
}
