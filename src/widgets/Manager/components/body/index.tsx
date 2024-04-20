import { TableBody, TableCell, TableRow } from 'semantic-ui-react'
import { HeaderCellProps } from '../header/protocols'

type ManagerBodyProps = {
  body: any[]
  header: HeaderCellProps[]
}

export function ManagerBody(props: ManagerBodyProps) {
  const { body, header } = props
  return (
    <TableBody>
      {body.map((item) => (
        <TableRow key={String(Math.random())}>
          {Object.values(item).map((item: any, index) => (
            <TableCell
              width={header[index].width}
              textAlign={header[index].textAlign}>
              {item}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}
