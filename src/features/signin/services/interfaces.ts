import { AuthenticationParams } from '../protocols'
import { Account } from '@/entities/account'

export interface AuthService {
  auth(payload: AuthenticationParams): Promise<Account>
}
