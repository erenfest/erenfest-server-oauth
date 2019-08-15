import { verify, sign } from 'jsonwebtoken'

import { ProviderEnum } from '../../../constants'
import { config } from '../../../config'
import { Data, Payload, SignatureAlgorithm } from '../types'

export interface AccessTokenData extends Data {
  readonly id: number
  readonly provider: ProviderEnum
}

export interface AccessTokenOption {
  readonly issuedAt: Date
}

export const AccessToken = {
  async encode(data: AccessTokenData, { issuedAt }: AccessTokenOption) {
    return new Promise<string>((resolve, reject) => {
      const payload = { iat: issuedAt.getTime(), data }
      sign(payload, config.accessTokenSecretKey, { algorithm: SignatureAlgorithm.Hs256, expiresIn: '6h' }, (error, token) => {
        if (error) {
          reject(error)
        } else {
          resolve(token)
        }
      })
    })
  },
  async decode(token: string) {
    return new Promise<Payload<AccessTokenData>>((resolve, reject) => {
      verify(token, config.accessTokenSecretKey, (error, payload) => {
        if (error) {
          reject(error)
        } else {
          resolve(payload as Payload<AccessTokenData>)
        }
      })
    })
  }
}
