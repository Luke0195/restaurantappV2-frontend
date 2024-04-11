import { yup } from '@/libs/yup'

const schema = yup.object({
  email: yup
    .string()
    .email('O campo e-mail é obrigatório')
    .required('O campo é e-mail obrigatório'),
  password: yup
    .string()
    .required('O campo senha é obrigatório ')
    .min(6, 'O campo deve ter no mínimo 6 caracteres'),
})

export { schema }
