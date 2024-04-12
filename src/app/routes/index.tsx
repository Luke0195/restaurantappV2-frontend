import { Routes as Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './private-route'
import { SignIn, Home } from '@/pages'

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
