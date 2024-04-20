import { TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { ManagerHeaderProps } from './protocols'

export function ManagerHeader(props: ManagerHeaderProps) {
  const { options } = props
  return (
    <TableHeader fullWidth>
      <TableRow>
        {options.map((item) => (
          <TableHeaderCell
            key={item.text}
            width={item.width}
            textAlign={item.textAlign}>
            {' '}
            {item.text}
          </TableHeaderCell>
        ))}
      </TableRow>
    </TableHeader>
  )
}
