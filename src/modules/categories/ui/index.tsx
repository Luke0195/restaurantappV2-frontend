import { Content, Header, ManagerRoot } from '@/widgets'
import { IconsRoot } from '@/widgets/Sidebar/options/icons'
import { header, makeMock } from '../options'
export function Ui() {
  return (
    <Content>
      <Header
        data={{
          title: 'Cardápio',
          description: 'Gerencie os produtos do seu estabelecimento',
          icon: IconsRoot.BiFoodMenu,
        }}
      />
      <ManagerRoot.ManagerWrapper>
        <ManagerRoot.ManagerContainer>
          <ManagerRoot.ManagerHeader options={header} />
          <ManagerRoot.ManagerBody body={makeMock()} header={header} />
        </ManagerRoot.ManagerContainer>
      </ManagerRoot.ManagerWrapper>
    </Content>
  )
}
