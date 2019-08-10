const COOKIE = Symbol('cookie')

export class Cookie {
  static get Empty() {
    return new Cookie()
  }

  [COOKIE] = new Map<string, any>()

  private constructor() {}

  get isEmpty() {
    return !!this[COOKIE].size
  }

  get cookie() {
    return this[COOKIE]
  }

  toRaw(): Record<string, any> {
    const raw = {}
    const cookie = this[COOKIE]
    for (const [key, value] of cookie) {
      raw[key] = value
    }
    return raw
  }

  get(key: string) {
    return this[COOKIE].get(key.toLowerCase())
  }

  set(cookie: Cookie) {
    this[COOKIE] = cookie.cookie
  }

  setKey(key: string, value: any) {
    this[COOKIE].set(key.toLowerCase(), value)
  }
}
