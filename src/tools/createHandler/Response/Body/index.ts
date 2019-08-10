export class Body {
  public static get Empty() {
    return new Body()
  }

  public static create(body: any) {
    return new Body(body)
  }

  private constructor(private _body?: any) {}

  public get body() {
    return this._body
  }

  public get raw() {
    return typeof this._body === 'object' ? JSON.stringify(this._body) : this._body
  }

  public update(body: any) {
    this._body = body
  }
}
