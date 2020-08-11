import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { PrivateRouteType } from './types'
import PATHS from '../../../containers/Routes/PATHS'


const  PrivateRoute  = ({ component: Component, auth: authenticated }: PrivateRouteType) =>
  <Route render={props => (
    authenticated ? (
        <Component {...props} />
      ) : (
      <Redirect to={PATHS.LOGIN}/>
      )
  )} />

export default PrivateRoute
