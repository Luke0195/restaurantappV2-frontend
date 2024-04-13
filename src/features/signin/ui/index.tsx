import { useEffect, useState } from 'react'
import { Banner, Form } from './components'
import logo from '@/assets/img/logo.jpg'

export function Ui() {
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(false)
    }, 2000)
  }, [])
  return (
    <div className="w-screen h-screen flex-col items-center justify-center overflow-hidden relative">
      {showBanner && <Banner />}
      <div className="flex  items-center justify-center h-full">
        <div className="flex-1 relative ">
          {!showBanner && (
            <>
              <img
                src={logo}
                className="object-fill relative opacity-80 h-screen w-screen"
              />
            </>
          )}
        </div>
        <div className="flex-1 w-full flex flex-col items-center justify-center">
          <p className="font-normal"> Bem-vindo(a) ao </p>
          <span className="flex items-center text-2xl my-2 ">
            <h2 className="font-bold"> LSDFood</h2>App
          </span>
          <Form />
        </div>
      </div>
    </div>
  )
}
