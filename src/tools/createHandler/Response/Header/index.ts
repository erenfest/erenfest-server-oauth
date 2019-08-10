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

  private constructor(private _header = new Map<string, readonly any[]>()) {}

  public get header() {
    return this._header
  }

  public toRaw() {
    const raw = {}
    const header = this._header
    for (const [key, value] of header.values()) {
      raw[key] = value
    }
    return raw
  }

  public set(header: Header) {
    this._header = header.header
  }

  public setKey(key: string, values: readonly any[]) {
    this._header.set(key, values.map(value => JSON.stringify(value)))
  }

  public removeKey(key: string) {
    this._header.delete(key)
  }

  public clearKey(key: string) {
    this._header.set(key, [])
  }
}
