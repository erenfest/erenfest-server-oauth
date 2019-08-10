const COOKIE = Symbol('cookie')

export class Cookie {
  public static get Empty() {
    return new Cookie()
  }

  private [COOKIE] = new Map<string, any>()

  private constructor() {}

  public get isEmpty() {
    return !!this[COOKIE].size
  }

  public get cookie() {
    return this[COOKIE]
  }

  public toRaw(): Record<string, any> {
    const raw = {}
    const cookie = this[COOKIE]
    for (const [key, value] of cookie) {
      raw[key] = value
    }
    return raw
  }

  public get(key: string) {
    return this[COOKIE].get(key.toLowerCase())
  }

  public set(cookie: Cookie) {
    this[COOKIE] = cookie.cookie
  }

  public setKey(key: string, value: any) {
    this[COOKIE].set(key.toLowerCase(), value)
  }
}
