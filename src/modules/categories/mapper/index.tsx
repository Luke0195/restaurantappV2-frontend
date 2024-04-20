import { Category } from '@/entities/category'
import { ManagerResponseData } from '../protocols'
import formatters from '@/utils/formatters'

import moment from 'moment'
import { Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'

export function mapPersisteToDomain(data: Category[]): ManagerResponseData[] {
  return data.map((item) => {
    const parsedItem: ManagerResponseData = {
      id: formatters.notEmptyStringOrDefault(item.id),
      name: formatters.notEmptyStringOrDefault(item.name),
      iconJsx: formatters.notEmptyStringOrDefault(item.icon),
      createdAt: formatters.notEmptyStringOrDefault(
        moment(item.createdAt).format('dd/MM/yyyy'),
      ),
      actionJsx: (
        <div>
          <Dropdown icon={'ellipsis vertical'}>
            <DropdownMenu>
              <DropdownItem text="Editar" icon="edit" />
              <DropdownItem text="Deletar" icon="trash" />
            </DropdownMenu>
          </Dropdown>
        </div>
      ),
    }
    return parsedItem
  })
}
