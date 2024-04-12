import { BrowserRouter } from 'react-router-dom'
import { Routes } from '../routes'

export function Main() {
  return (
    <div className="w-screen h-screen ">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}
