import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AppContext } from '../../context'
import PATHS from '../PATHS'

type PrivateRouteType = {
  component: React.ComponentType<any>
  path: string
  exact?: boolean
}
const PrivateRoute = ({ component: Component, ...props }: PrivateRouteType) => (
  <AppContext.Consumer>
     {context => (
        <Route {...props} render={props => (
          context.authenticated ? (
            <Component {...props} />
            ) : (
            <Redirect to={PATHS.LOGIN}/>
            )
        )} />
     )}
  </AppContext.Consumer>)

export default PrivateRoute