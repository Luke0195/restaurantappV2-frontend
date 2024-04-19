import { Content, Header, Tabs } from '@/widgets'
import { IconsRoot } from '@/widgets/Sidebar/options/icons'
import { useState } from 'react'

export function Ui() {
  const [activeTab, setActiveTab] = useState<number>(0)

  const options = [
    {
      title: 'Produtos',
      component: () => <h1> Produto</h1>,
    },
    {
      title: 'Categorias',
      component: () => <h1> Categorias</h1>,
    },
  ]

  return (
    <Content>
      <Header
        data={{
          title: 'Cardápio',
          description: 'Gerencie os produtos do seu estabelecimento',
          icon: IconsRoot.BiFoodMenu,
        }}
      />

      <Tabs tabOptions={options} tabProps={{ activeTab, setActiveTab }} />
      {options[activeTab].component()}
    </Content>
  )
}
