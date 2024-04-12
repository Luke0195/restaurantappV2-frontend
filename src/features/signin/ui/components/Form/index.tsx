import { IoMdLogIn } from 'react-icons/io'
import { toast } from 'react-toastify'
import { FieldError } from '@/widgets/Form'
import { useForm, Controller } from 'react-hook-form'
import {
  AuthenticationParams,
  schema,
  signInService,
  makeDefaultValues,
} from '../../../'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, Button, Loader } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export function Form() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const { formState, handleSubmit, control } = useForm<AuthenticationParams>({
    defaultValues: makeDefaultValues(),
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const { isValid, errors } = formState

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

  return (
    <div className="w-3/12 flex flex-col items-center justify-center overflow-hidden  ">
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
            className="w-full relative h-11"
            type="submit"
            color={!isValid ? 'grey' : 'red'}
            disabled={!isValid || loading}>
            {!isValid || loading ? <Loader active size="small" /> : 'Entrar'}
          </Button>
        </div>
      </form>
    </div>
  )
}
