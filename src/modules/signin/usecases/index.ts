import { AuthenticationParams } from '../protocols'
import { Account } from '@/entities/account'

export interface AuthenticationUseCase {
  authentication(payload: AuthenticationParams): Promise<Account>
}
