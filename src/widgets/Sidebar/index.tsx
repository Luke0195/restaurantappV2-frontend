import { FiMenu, FiHome } from 'react-icons/fi'
import { LuMenuSquare } from 'react-icons/lu'
export function SideBar() {
  return (
    <div className={`w-16 h-screen bg-red-500 p-4`}>
      <FiMenu size={18} />
      <div className="my-2">
        <div className=" items-center hidden">
          <FiHome color="#c8c8c8" size={20} className="relative" />
          <span> Home </span>
        </div>
        <div className="flex">
          <LuMenuSquare color="#c8c8c8" size={29} />
          <span> Histórico </span>
        </div>
      </div>
    </div>
  )
}
