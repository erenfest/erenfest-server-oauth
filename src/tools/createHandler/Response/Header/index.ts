const HEADER = Symbol('header')

export class Header {
  static get Empty() {
    return new Header()
  }

  static fromRecord(record: Record<string, readonly any[]>) {
    const header = new Header()
    for (const key in record) {
      header.setKey(key, record[key])
    }
    return header
  }

  static fromMap(map: Map<string, readonly any[]>) {
    return new Header(map)
  }

  [HEADER]: Map<string, readonly any[]>

  private constructor(header = new Map<string, readonly any[]>()) {
    this[HEADER] = header
  }

  get header() {
    return this[HEADER]
  }

  toRaw() {
    const raw = {}
    const header = this[HEADER]
    for (const [key, value] of header.values()) {
      raw[key] = value
    }
    return raw
  }

  set(header: Header) {
    this[HEADER] = header.header
  }

  setKey(key: string, values: readonly any[]) {
    this[HEADER].set(key, values.map(value => JSON.stringify(value)))
  }

  removeKey(key: string) {
    this[HEADER].delete(key)
  }

  clearKey(key: string) {
    this[HEADER].set(key, [])
  }
}
