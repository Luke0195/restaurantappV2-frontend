import { useEffect, useState } from 'react'
import { Banner, Form } from './components'
export function Ui() {
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(false)
    }, 2000)
  }, [])
  return (
    <div className="w-screen h-screen flex-col items-center justify-center overflow-hidden">
      {showBanner && <Banner />}
      <div className="flex flex-col items-center justify-center h-full">
        <p className="font-normal"> Bem-vindo(a) ao </p>
        <span className="flex items-center text-2xl my-2 ">
          <h2 className="font-bold"> Waiter</h2>App
        </span>
        <Form />
      </div>
    </div>
  )
}
