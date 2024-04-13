import {
  makeDefaultValues,
  signInService,
  schema,
  AuthenticationParams,
} from '../../../'
import { FieldError } from '@/widgets/Form'
import { IoMdLogIn } from 'react-icons/io'
import { Controller } from 'react-hook-form'
import { Input, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@/libs/yup'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function Form() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<AuthenticationParams>({
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
        navigate('home')
      }
    } catch (error: any) {
      toast.error('Erro ao realizar autenticação')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-3/6 flex flex-col items-center justify-center overflow-hidden  ">
      <form className="w-full gap-y-3" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              icon="mail"
              {...field}
              placeholder="Informe o e-mail"
              iconPosition="left"
              className="w-full my-2"
              error={Boolean(errors.email && errors.email.message)}
            />
          )}
        />
        {errors.email && errors.email.message && (
          <FieldError fieldMessage={errors.email.message} />
        )}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              icon="lock"
              type="password"
              {...field}
              autoComplete="true"
              placeholder="Informe a sua senha"
              iconPosition="left"
              className="w-full my-2"
              error={Boolean(errors.password && errors.password.message)}
            />
          )}
        />
        {errors.password && errors.password.message && (
          <FieldError fieldMessage={errors.password.message} />
        )}
        <span className="text-xs w-full flex items-center justify-center text-primaryGray cursor-pointer gap-2 align-items-center  hover:text-primaryRed ">
          <IoMdLogIn size={19} />
          Esqueci Minha Senha
        </span>
        <div className="w-full my-4">
          <Button
            loading={loading}
            className="w-full relative h-11"
            type="submit"
            color={!isValid ? 'grey' : 'red'}
            disabled={!isValid || loading}>
            Entrar
          </Button>
        </div>
      </form>
    </div>
  )
}
