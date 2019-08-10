export class Cookie {
  public static get Empty() {
    return new Cookie()
  }

  private _cookie = new Map<string, any>()

  private constructor() {}

  public get isEmpty() {
    return !!this.cookie.size
  }

  public get cookie() {
    return this._cookie
  }

  public toRaw(): Record<string, any> {
    const raw = {}
    const cookie = this._cookie
    for (const [key, value] of cookie) {
      raw[key] = value
    }
    return raw
  }

  public get(key: string) {
    return this._cookie.get(key.toLowerCase())
  }

  public set(cookie: Cookie) {
    this._cookie = cookie.cookie
  }

  public setKey(key: string, value: any) {
    this._cookie.set(key.toLowerCase(), value)
  }
}
