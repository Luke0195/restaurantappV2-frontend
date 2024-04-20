import { ComponentWithProps } from '@/shared/protocols'
import { Table } from 'semantic-ui-react'

export function ManagerContainer(props: ComponentWithProps) {
  const { children } = props
  return <Table unstackable> {children}</Table>
}
