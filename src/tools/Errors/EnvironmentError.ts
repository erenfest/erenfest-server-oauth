import { BaseError } from './BaseError'

export class EnvironmentError extends BaseError {
  public readonly name = 'EnvironmentError'
  public readonly message = 'EnvironmentError'
}
