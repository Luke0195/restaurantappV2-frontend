import { Route, Routes as Switch } from 'react-router-dom'
import { PrivateRoute } from './private-route'
import { Home, SignIn } from '@/pages'

export function Routes() {
  return (
    <Switch>
      <Route index element={<SignIn />} />
      <Route
        path="home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Switch>
  )
}
