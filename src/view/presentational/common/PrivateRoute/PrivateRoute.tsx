import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { PrivateRouteType } from './types'
import { PATHS } from '../../../../utils'


const  PrivateRoute  = ({ component: Component, auth: authenticated }: PrivateRouteType) =>
  <Route render={props => (
    authenticated ? (
        <Component {...props} />
      ) : (
      <Redirect to={PATHS.LOGIN}/>
      )
  )} />

export default PrivateRoute
