import { BaseError } from './BaseError'

export class EnvironmentError extends BaseError {
  readonly name = 'EnvironmentError'
  readonly message = 'EnvironmentError'
}
