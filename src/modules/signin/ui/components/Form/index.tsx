import { useAuthenticationHook } from './hooks'
import validators from '@/utils/validators'
import { FieldError } from '@/widgets/Form'
import { IoMdLogIn } from 'react-icons/io'
import { Controller } from 'react-hook-form'
import { Button, Input } from 'semantic-ui-react'

export function Form() {
  const { form, loading, onSubmit } = useAuthenticationHook()
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = form

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
        {validators.isBoolean(errors.email && errors.email.message) && (
          <FieldError fieldMessage={errors?.email?.message} />
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
        {validators.isBoolean(errors.password && errors.password.message) && (
          <FieldError fieldMessage={errors?.password?.message} />
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
