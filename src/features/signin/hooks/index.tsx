import { useState } from 'react'
import {
  AuthenticationParams,
  makeDefaultValues,
  signInService,
  schema,
} from '../'
import { AuthenticationHookProps } from './protocols'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@/libs/yup'
import { toast } from 'react-toastify'

export function useAuthenticationHook(): AuthenticationHookProps {
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
      localStorage.setItem('waiterapp@token', JSON.stringify(token))
      navigate('/home')
      toast.success('Usuário Autenticado com sucesso!')
    } catch (error) {
      toast.error('Erro ao realizar a autenticação')
    } finally {
      setLoading(false)
    }
  }

  return {
    loadingProps: { loading, setLoading },
    form,
    onSubmit,
  }
}
