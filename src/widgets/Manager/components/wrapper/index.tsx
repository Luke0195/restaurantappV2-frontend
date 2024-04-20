import { ComponentWithProps } from '@/shared/protocols'
import { Segment } from 'semantic-ui-react'

type ManagerWrapperProps = ComponentWithProps

export function ManagerWrapper({ children }: ManagerWrapperProps) {
  return (
    <Segment className="w-11/12 " style={{ padding: 0 }}>
      {children}
    </Segment>
  )
}
