import { HeaderCellProps } from '@/widgets/Manager/components/header/protocols'

export const header: HeaderCellProps[] = [
  {
    text: 'Ícone',
    width: 2,
    textAlign: 'center',
    key: 'icon_jsx',
    sortedBy: 'icon',
  },
  {
    text: 'Nome',
    width: 10,
    textAlign: 'center',
    key: 'name',
    sortedBy: 'name',
  },
  {
    text: 'Ações',
    width: 3,
    textAlign: 'center',
    key: 'action',
    sortedBy: 'action',
  },
]

export const makeMock = (): any[] => {
  return [
    { icon_jsx: 'any_icon', name: 'any_name', action: <h1> Teste</h1> },
    { icon_jsx: 'any_icon1', name: 'any_name1', action: 'any_action' },
  ]
}
