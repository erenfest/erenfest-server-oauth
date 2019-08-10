const BODY = Symbol('body')

export class Body {
  static get Empty() {
    return new Body()
  }

  static create(body: any) {
    return new Body(body)
  }

  [BODY]: any

  private constructor(body?: any) {
    this[BODY] = body
  }

  get body() {
    return this[BODY]
  }

  get raw() {
    return typeof this[BODY] === 'object' ? JSON.stringify(this[BODY]) : this[BODY]
  }

  update(body: any) {
    this[BODY] = body
  }
}
