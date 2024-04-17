import waiterLogo from '@/assets/img/walogo.svg'
import { sideBarProps } from './options'
import { Icon } from './components'
import { CiPower } from 'react-icons/ci'

import { useNavigate } from 'react-router-dom'

export function SideBar() {
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('waiterapp@token')
    navigate('/')
  }

  return (
    <div
      className={`w-32 h-screen  p-4 flex flex-col items-center bg-primaryWhite border-x-gray-300 border`}>
      <img src={waiterLogo} alt="Logo waiter app" />
      <ul className="my-7 flex-col">
        {sideBarProps.map((item, index) => (
          <Icon
            key={index}
            data={{ icon: item.icon, link: item.link, text: item.text }}
          />
        ))}
        <button
          className="flex flex-col items-center w-full my-9 py-3 gap-4 cursor-pointer hover:text-primaryRed"
          onClick={handleLogOut}>
          <CiPower size={23} />
          <span className="text-sm cursor-pointer "> Sair</span>
        </button>
      </ul>
    </div>
  )
}
