import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AppContext } from '../../context'
import { PrivateRouteType } from './types'
import PATHS from '../PATHS'

const PrivateRoute = ({ component: Component}: PrivateRouteType) => (
  <AppContext.Consumer>
     {context => (
        <Route render={props => (
          context.authenticated ? (
            <Component context={context} {...props} />
            ) : (
            <Redirect to={PATHS.LOGIN}/>
            )
        )} />
     )}
  </AppContext.Consumer>);

export default  PrivateRoute