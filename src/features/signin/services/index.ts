import { httpClient } from '@/shared/http'
import { AuthService } from './interfaces'
import { Account } from '@/entities/account'

import { AuthenticationParams } from '../protocols'

class SignInService implements AuthService {
  async auth({ email, password }: AuthenticationParams): Promise<Account> {
    const response: any = await httpClient.request({
      endpoint: 'auth/login',
      method: 'POST',
      body: { email, password },
      headers: null,
    })
    return response
  }
}

export const signInService = new SignInService()
