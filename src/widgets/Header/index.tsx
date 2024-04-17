import { IconType } from 'react-icons'
type HeaderProps = {
  data: {
    icon: IconType
    title: string
    description: string
  }
}

export function Header(props: HeaderProps) {
  const { icon: Component, title, description } = props.data
  return (
    <header className="flex flex-col w-full my-4">
      <div className="flex items-center  gap-x-4">
        <Component size={28} color="#c8c8c8" />
        <h2 className="m-0 text-gray-400"> {title}</h2>
      </div>
      <p className="my-4 text-gray-400"> {description}</p>
    </header>
  )
}
