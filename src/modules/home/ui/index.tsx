import { FaHome } from 'react-icons/fa'
import { Header } from '@/widgets/Header'
import { DragnDrop } from './components'

export function Ui() {
  return (
    <>
      <Header
        data={{
          icon: FaHome,
          description: 'Acompanhe os pedidos dos clientes',
          title: 'Home',
        }}
      />
      <DragnDrop />
    </>
  )
}
