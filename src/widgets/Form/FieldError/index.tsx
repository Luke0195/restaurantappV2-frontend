type Props = {
  fieldMessage?: string
}

export function FieldError(props: Props) {
  const { fieldMessage } = props
  return (
    <span className="my-2  w-full block p-0.5 text-center text-fieldError">
      {fieldMessage}
    </span>
  )
}
