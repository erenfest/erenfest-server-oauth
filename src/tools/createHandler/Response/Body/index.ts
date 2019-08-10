const BODY = Symbol('body')

export class Body {
  public static get Empty() {
    return new Body()
  }

  public static create(body: any) {
    return new Body(body)
  }

  private [BODY]: any

  private constructor(body?: any) {
    this[BODY] = body
  }

  public get body() {
    return this[BODY]
  }

  public get raw() {
    return typeof this[BODY] === 'object' ? JSON.stringify(this[BODY]) : this[BODY]
  }

  public update(body: any) {
    this[BODY] = body
  }
}
