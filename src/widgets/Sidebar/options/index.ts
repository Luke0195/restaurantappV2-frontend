import { IconType } from 'react-icons'
import { IconsRoot } from './icons'

export type IconProps = {
  icon: IconType
  text: string
  link: string
}

export const sideBarProps: IconProps[] = [
  {
    icon: IconsRoot.FaHome,
    text: 'Home',
    link: '/main',
  },
  {
    icon: IconsRoot.PiClipboardTextBold,
    text: 'Histórico',
    link: 'historic',
  },
  {
    icon: IconsRoot.BiFoodMenu,
    text: 'Cardápio',
    link: 'categories',
  },
  {
    icon: IconsRoot.FiUsers,
    text: 'Usuários',
    link: '/users',
  },
  {
    icon: IconsRoot.MdOutlineNotificationsNone,
    text: 'Notificações',
    link: '/notifications',
  },
  {
    icon: IconsRoot.PiGearSixLight,
    text: 'Configurações',
    link: '/settings',
  },
  {
    icon: IconsRoot.CgProfile,
    text: 'Perfil',
    link: '/profile',
  },
]
