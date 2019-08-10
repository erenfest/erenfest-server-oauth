export interface Data {}

export interface Payload<D extends Data> {
  /**
   * issued at
   */
  readonly iat: number
  /**
   * expires at
   */
  readonly exp: number
  readonly data: D
}

export interface Token<D extends Data> {
  readonly encode: (payload: D, option?: any) => Promise<string>
  readonly decode: (token: string) => Promise<Payload<D>>
}

export const enum SignatureAlgorithm {
  Hs256 = 'HS256',
  Hs384 = 'HS384',
  Hs512 = 'HS512',
  Rs256 = 'RS256',
  Rs384 = 'RS384',
  Rs512 = 'RS512',
  Es256 = 'ES256',
  Es384 = 'ES384',
  Es512 = 'ES512',
  None = 'none'
}
