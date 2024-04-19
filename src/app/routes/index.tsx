import { Route, Routes as Switch } from 'react-router-dom'
import { PrivateRoute } from './private-route'
import { Categories, Historic, Home, SignIn } from '@/pages'
import { Layout } from '@/widgets/Layout'

export function Routes() {
  return (
    <Switch>
      <Route index element={<SignIn />} />
      <Route
        path="main"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }>
        <Route index element={<Home />} />
        <Route path="historic" element={<Historic />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Switch>
  )
}
