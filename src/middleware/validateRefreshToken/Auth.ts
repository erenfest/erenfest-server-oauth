import Time from 'dayjs'

import { Payload } from '../../tools/Token/types'

export class Auth<T = any> {
  static from<T = any>(payload: Payload<T>) {
    return new Auth(payload)
  }

  readonly issuedAt: Time.Dayjs
  readonly expiredAt: Time.Dayjs
  readonly data: T

  private constructor({ iat, exp, data }: Payload<T>) {
    this.issuedAt = Time(iat)
    this.expiredAt = Time(exp)
    this.data = data
  }
}
