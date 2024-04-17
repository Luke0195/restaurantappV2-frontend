import { Outlet } from 'react-router-dom'
import { Container, SideBar } from '../index'

export function Layout() {
  return (
    <div className="flex w-full h-full ">
      <SideBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}
