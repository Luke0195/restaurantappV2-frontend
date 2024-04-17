import {
  AuthenticationParams,
  makeDefaultValues,
  schema,
  signInService,
} from '@/features/signin'
import { yupResolver } from '@/libs/yup'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, UseFormReturn } from 'react-hook-form'
import { toast } from 'react-toastify'

type SignInAuthenticationHookProps = {
  loading: boolean
  form: UseFormReturn<AuthenticationParams, any, undefined>
  onSubmit: (data: AuthenticationParams) => Promise<void>
}

export function useAuthenticationHook(): SignInAuthenticationHookProps {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const form = useForm<AuthenticationParams>({
    defaultValues: makeDefaultValues(),
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = async ({ email, password }: AuthenticationParams) => {
    setLoading(true)
    try {
      const { token } = await signInService.auth({ email, password })
      if (token) {
        localStorage.setItem('waiterapp@token', JSON.stringify(token))
        toast.success('Usuário Autenticado com sucesso!')
        navigate('/main')
      }
    } catch (error: any) {
      toast.error('Erro ao realizar autenticação')
    } finally {
      setLoading(false)
    }
  }
  return { loading, form, onSubmit }
}
