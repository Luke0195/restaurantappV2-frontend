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
              <img src={logo} className="object-fill relative opacity-80" />
              <p className="text-primaryWhiteLight absolute  top-1/2 left-80 transform -translate-x-auto -translate-y-auto opacity-85">
                {' '}
                Gerencie e optimize os recursos do seu restaurante com{' '}
                <span className="font-bold">LSDFood</span>
              </p>
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
