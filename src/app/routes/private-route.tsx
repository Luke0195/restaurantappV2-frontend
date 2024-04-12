import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute({ children }: any) {
  const token = JSON.stringify(localStorage.getItem('waiterapp@token'))
  console.log('Token', token)
  if (!token) {
    return <Navigate to={'/'} replace />
  }
  return children ? children : <Outlet />
}
