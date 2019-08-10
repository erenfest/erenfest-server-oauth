import { verify, sign } from 'jsonwebtoken'

import { PROVIDER_ENUM } from '../../../constants'
import { Data, Payload, Token, SignatureAlgorithm } from '../types'
import { NoSecretKeyError } from '../Errors'

export interface AccessTokenData extends Data {
  readonly id: number
  readonly provider: PROVIDER_ENUM
  readonly oauthId: string
}

export interface AccessTokenOption {
  readonly issuedAt?: Date
}

export class AccessToken implements Token<AccessTokenData> {
  public constructor(private readonly secretKey: string) {
    if (!secretKey) {
      throw new NoSecretKeyError()
    }
  }

  public async encode(data: AccessTokenData, { issuedAt = new Date() }: AccessTokenOption = {}) {
    return new Promise<string>((resolve, reject) => {
      const payload = { iat: issuedAt.getTime(), data }
      sign(payload, this.secretKey, { algorithm: SignatureAlgorithm.Hs256, expiresIn: '6h' }, (error, token) => {
        if (error) {
          reject(error)
        } else {
          resolve(token)
        }
      })
    })
  }

  public async decode(token: string) {
    return new Promise<Payload<AccessTokenData>>((resolve, reject) => {
      verify(token, this.secretKey, (error, payload) => {
        if (error) {
          reject(error)
        } else {
          resolve(payload as Payload<AccessTokenData>)
        }
      })
    })
  }
}
