export abstract class BaseError extends Error {
  public abstract readonly name: string
  public abstract readonly message: string
}
