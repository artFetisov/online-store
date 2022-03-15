import { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Context } from '..'
import { LOGIN_ROUTE, MAIN_PAGE_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { authRoutes, publicRoutes } from '../utils/routes'

export const AppRouter = () => {
  const { user } = useContext(Context)
  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} component={Component} exact />
        })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} exact />
      })}
      <Redirect to={MAIN_PAGE_ROUTE} />
    </Switch>
  )
}
