import { SetStateAction } from 'react'

export type TabItem = {
  title: string
  component: () => JSX.Element
}

export type TabProps = {
  tabProps: {
    activeTab: number
    setActiveTab: React.Dispatch<SetStateAction<number>>
  }
  tabOptions: TabItem[]
}
