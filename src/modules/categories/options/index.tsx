import { HeaderCellProps } from '@/widgets/Manager/components/header/protocols'

export const header: HeaderCellProps[] = [
  {
    text: 'Id',
    width: 2,
    textAlign: 'center',
    key: 'id',
    sortedBy: 'id',
  },
  {
    text: 'Ícone',
    width: 2,
    textAlign: 'center',
    key: 'icon_jsx',
    sortedBy: 'icon',
  },
  {
    text: 'Nome',
    width: 8,
    textAlign: 'center',
    key: 'name',
    sortedBy: 'name',
  },
  {
    text: 'Data de Criação',
    width: 2,
    textAlign: 'center',
    key: 'createdAt',
    sortedBy: 'createdAt',
  },
  {
    text: 'Ações',
    width: 3,
    textAlign: 'center',
    key: 'action',
    sortedBy: 'action',
  },
]
