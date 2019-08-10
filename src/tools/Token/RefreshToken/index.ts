import { verify, sign } from 'jsonwebtoken'

import { Data, Payload, Token, SignatureAlgorithm } from '../types'
import { NoSecretKeyError } from '../Errors'

export interface RefreshTokenData extends Data {
  readonly id: number
}

export interface RefreshTokenOption {
  readonly issuedAt: Date
  readonly expiredAt: Date
}

export class RefreshToken implements Token<RefreshTokenData> {
  public constructor(private readonly secretKey: string) {
    if (!secretKey) {
      throw new NoSecretKeyError()
    }
  }

  public async encode(data: RefreshTokenData, { issuedAt, expiredAt }: RefreshTokenOption) {
    return new Promise<string>((resolve, reject) => {
      const payload = { iat: issuedAt.getTime(), exp: expiredAt.getTime(), data }
      sign(payload, this.secretKey, { algorithm: SignatureAlgorithm.Hs256 }, (error, token) => {
        if (error) {
          reject(error)
        } else {
          resolve(token)
        }
      })
    })
  }

  public async decode(token: string) {
    return new Promise<Payload<RefreshTokenData>>((resolve, reject) => {
      verify(token, this.secretKey, (error, payload) => {
        if (error) {
          reject(error)
        } else {
          resolve(payload as Payload<RefreshTokenData>)
        }
      })
    })
  }
}
