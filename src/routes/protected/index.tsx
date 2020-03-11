import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AppContext } from '../../context'

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <AppContext.Consumer>
     {(context) => (
        <Route {...rest} render={props => (
          context.authenticated ? (
            <Component {...props} />
            ) : (
            <Redirect to='/login'/>
            )
        )} />
     )}

  </AppContext.Consumer>)

export default PrivateRoute