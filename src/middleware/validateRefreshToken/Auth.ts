import Time from 'dayjs'

import { Payload } from '../../tools/Token/types'

export class Auth<T = any> {
  public static from<T = any>(payload: Payload<T>) {
    return new Auth(payload)
  }

  public readonly issuedAt: Time.Dayjs
  public readonly expiredAt: Time.Dayjs
  public readonly data: T

  private constructor({ iat, exp, data }: Payload<T>) {
    this.issuedAt = Time(iat)
    this.expiredAt = Time(exp)
    this.data = data
  }
}
