import { AuthenticationParams } from '../protocols'

export function makeDefaultValues(): AuthenticationParams {
  return { email: '', password: '' }
}
