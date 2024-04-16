import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute({ children }: any) {
  const token = localStorage.getItem('waiterapp@token')
  if (!token) {
    return <Navigate to={'/'} replace />
  }
  return children ? children : <Outlet />
}
