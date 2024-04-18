import { IconType } from 'react-icons'
import { FaHome } from 'react-icons/fa'
import { PiClipboardTextBold } from 'react-icons/pi'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { PiGearSixLight } from 'react-icons/pi'
import { CgProfile } from 'react-icons/cg'

export type IconProps = {
  icon: IconType
  text: string
  link: string
}

export const sideBarProps: IconProps[] = [
  {
    icon: FaHome,
    text: 'Home',
    link: '/main',
  },
  {
    icon: PiClipboardTextBold,
    text: 'Histórico',
    link: 'historic',
  },
  {
    icon: FiUsers,
    text: 'Usuários',
    link: '/users',
  },
  {
    icon: MdOutlineNotificationsNone,
    text: 'Notificações',
    link: '/notifications',
  },
  {
    icon: PiGearSixLight,
    text: 'Configurações',
    link: '/settings',
  },
  {
    icon: CgProfile,
    text: 'Perfil',
    link: '/profile',
  },
]
