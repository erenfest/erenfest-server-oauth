export abstract class BaseError extends Error {
  abstract readonly name: string
  abstract readonly message: string
}
