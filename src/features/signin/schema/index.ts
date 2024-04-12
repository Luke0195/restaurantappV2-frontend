import { yup } from '@/libs/yup'

const schema = yup
  .object({
    email: yup
      .string()
      .email('O campo e-mail é obrigatório')
      .required('O campo é e-mail obrigatório'),
    password: yup
      .string()
      .required('O campo senha é obrigatório ')
      .min(3, 'O campo deve ter no mínimo 3 caracteres'),
  })
  .required()

export { schema }
