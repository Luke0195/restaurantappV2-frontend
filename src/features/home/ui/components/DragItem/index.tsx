import { IconType } from 'react-icons'
import { Card } from './components/Card'
type DragItemProps = {
  type: 'waiting' | 'processing' | 'done'
  data: {
    icon: IconType
    text: string
  }
}
export function DragItem(props: DragItemProps) {
  const {
    type,
    data: { icon: Component, text },
  } = props
  return (
    <div className=" flex flex-col items-center p-4 overflow-hidden ">
      <div className="flex items-center  h-full gap-4 ">
        <Component size={20} />
        <strong> {text}</strong>
      </div>
      <div className="w-full gap-6 flex flex-col justify-center items-center my-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
