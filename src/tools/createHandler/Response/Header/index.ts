const HEADER = Symbol('header')

export class Header {
  public static get Empty() {
    return new Header()
  }

  public static fromRecord(record: Record<string, readonly any[]>) {
    const header = new Header()
    for (const key in record) {
      header.setKey(key, record[key])
    }
    return header
  }

  public static fromMap(map: Map<string, readonly any[]>) {
    return new Header(map)
  }

  private [HEADER]: Map<string, readonly any[]>

  private constructor(header = new Map<string, readonly any[]>()) {
    this[HEADER] = header
  }

  public get header() {
    return this[HEADER]
  }

  public toRaw() {
    const raw = {}
    const header = this[HEADER]
    for (const [key, value] of header.values()) {
      raw[key] = value
    }
    return raw
  }

  public set(header: Header) {
    this[HEADER] = header.header
  }

  public setKey(key: string, values: readonly any[]) {
    this[HEADER].set(key, values.map(value => JSON.stringify(value)))
  }

  public removeKey(key: string) {
    this[HEADER].delete(key)
  }

  public clearKey(key: string) {
    this[HEADER].set(key, [])
  }
}
