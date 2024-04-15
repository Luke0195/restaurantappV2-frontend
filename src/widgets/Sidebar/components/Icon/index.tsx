import { IconProps } from '../../options'

type ComponentProps = {
  data: IconProps
}

export const Icon = (props: ComponentProps) => {
  const { icon: Component, text } = props.data
  return (
    <li className="flex flex-col items-center w-full my-7 py-3 gap-4 cursor-pointer hover:text-primaryRed">
      <Component size={23} color="" />
      <span className="text-sm"> {text}</span>
    </li>
  )
}
