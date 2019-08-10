import { StatusCode } from '../../StatusCode'
import { BaseError } from '../BaseError'

export abstract class HttpError extends BaseError {
  public abstract readonly statusCode: StatusCode
}
