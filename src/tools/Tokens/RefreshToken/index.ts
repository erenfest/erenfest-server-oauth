import { verify, sign } from 'jsonwebtoken'

import { config } from '../../../config'
import { Data, Payload, SignatureAlgorithm } from '../types'

export interface RefreshTokenData extends Data {
  readonly id: number
}

export interface RefreshTokenOption {
  readonly issuedAt: Date
  readonly expiredAt: Date
}

export const RefreshToken = {
  async encode(data: RefreshTokenData, { issuedAt, expiredAt }: RefreshTokenOption) {
    return new Promise<string>((resolve, reject) => {
      const payload = { iat: issuedAt.getTime(), exp: expiredAt.getTime(), data }
      sign(payload, config.refreshTokenSecretKey, { algorithm: SignatureAlgorithm.Hs256 }, (error, token) => {
        if (error) {
          reject(error)
        } else {
          resolve(token)
        }
      })
    })
  },
  async decode(token: string) {
    return new Promise<Payload<RefreshTokenData>>((resolve, reject) => {
      verify(token, config.refreshTokenSecretKey, (error, payload) => {
        if (error) {
          reject(error)
        } else {
          resolve(payload as Payload<RefreshTokenData>)
        }
      })
    })
  }
}
