import { TextField, Button } from '@radix-ui/themes'
import { IoMdMail, IoMdLock, IoMdLogIn } from 'react-icons/io'

export function Form() {
  return (
    <div className="w-3/12 flex flex-col items-center justify-center overflow-hidden  ">
      <form className="w-full">
        <TextField.Root
          placeholder="Informe o e-mail"
          className="my-6"
          size="3"
          radius="small">
          <TextField.Slot>
            <IoMdMail />
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root
          placeholder="Informe o e-mail"
          className="my-4"
          size="3"
          radius="small">
          <TextField.Slot>
            <IoMdLock />
          </TextField.Slot>
        </TextField.Root>

        <span className="text-xs w-full flex items-center justify-center text-primaryGray cursor-pointer gap-2 align-items-center  hover:text-primaryRed ">
          <IoMdLogIn size={19} />
          Esqueci Minha Senha
        </span>

        <Button
          className="mt-6"
          type="button"
          color="gray"
          variant="outline"
          size={'3'}
          disabled
          style={{ width: '100%', marginTop: 9 }}>
          Entrar{' '}
        </Button>
      </form>
    </div>
  )
}
