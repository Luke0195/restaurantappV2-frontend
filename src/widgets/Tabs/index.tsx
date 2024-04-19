import { TabProps } from './protocols'
import { useCallback } from 'react'

export function Tabs(props: TabProps) {
  const { tabOptions, tabProps } = props
  const { setActiveTab, activeTab } = tabProps

  const handleSelectItem = useCallback(
    (value: number): void => {
      setActiveTab(value)
    },
    [setActiveTab],
  )

  return (
    <div className="my-20 border-b border-gray-200">
      {tabOptions.map((item, index) => (
        <button
          className={`px-6 py-4 font-semibold rounded-t-lg  ${activeTab === index ? `text-red-600 bg-slate-200` : `text-gray-400`}`}
          key={String(item.title)}
          onClick={() => handleSelectItem(index)}>
          {item.title}
        </button>
      ))}
    </div>
  )
}
