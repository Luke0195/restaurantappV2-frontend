import { SemanticWIDTHS } from 'semantic-ui-react'

export type HeaderCellProps = {
  text: string
  width: SemanticWIDTHS
  textAlign?: 'center' | 'left' | 'right'
  key?: string
  sortedBy?: string
}

export type ManagerHeaderProps = {
  options: HeaderCellProps[]
}
