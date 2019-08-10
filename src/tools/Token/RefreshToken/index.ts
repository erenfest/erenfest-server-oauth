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

const SECRET_KEY = Symbol('secretKey')

export class RefreshToken implements Token<RefreshTokenData> {
  private readonly [SECRET_KEY]: string

  public constructor(secretKey: string) {
    if (!secretKey) {
      throw new NoSecretKeyError()
    }

    this[SECRET_KEY] = secretKey
  }

  public async encode(data: RefreshTokenData, { issuedAt, expiredAt }: RefreshTokenOption) {
    return new Promise<string>((resolve, reject) => {
      const payload = { iat: issuedAt.getTime(), exp: expiredAt.getTime(), data }
      sign(payload, this[SECRET_KEY], { algorithm: SignatureAlgorithm.Hs256 }, (error, token) => {
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
      verify(token, this[SECRET_KEY], (error, payload) => {
        if (error) {
          reject(error)
        } else {
          resolve(payload as Payload<RefreshTokenData>)
        }
      })
    })
  }
}
