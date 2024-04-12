import { httpClient, InvalidResponseData } from '@/shared/http'
import { AuthService } from './interfaces'
import { Account } from '@/entities/account'

import { AuthenticationParams } from '../protocols'

class SignInService implements AuthService {
  private readonly endpoint: string

  constructor() {
    this.endpoint = '/auth/login'
  }

  async auth({ email, password }: AuthenticationParams): Promise<Account> {
    const response = await httpClient.request({
      endpoint: 'auth/login',
      method: 'POST',
      body: { email, password },
      headers: null,
    })
    if (typeof response !== 'object')
      throw new InvalidResponseData('Invalid Response')
    return { token: response.body }
  }
}

export const signInService = new SignInService()
