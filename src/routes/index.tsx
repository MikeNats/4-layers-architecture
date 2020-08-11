import React, { Suspense, lazy } from 'react';
import LogInPage from '../view/containers/LogInPage/LogInPage';
import ErrorPage from '../view/containers/ErrorPage/ErrorPage'; 
import PrivateRoute from  './protected'
import PATHS from './PATHS' 
import {connect} from 'react-redux';
import { RoutesProps, RoutesMapStateToProps } from './types'

import {
  Switch,
  Route,
  Redirect,
  HashRouter as Router, 
} from 'react-router-dom';
const Transactions = lazy(() => import('../view/containers/TransactionsPage/Transactions'));

export class Routes extends React.Component<RoutesProps, {}>{

  render(){
    return (<Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={PATHS.LOGIN} component={LogInPage} /> 
          <PrivateRoute exact={true} path="/" auth={this.props.authenticated} component={Transactions} />
          <Route exact={true} path={PATHS.ERROR} component={ErrorPage}/> 
          <Redirect to="/" />
        </Switch>
      </Suspense>
  </Router>)
  }
}

const mapStateToProps = (state: RoutesMapStateToProps) => ({//lodash check object
  authenticated: state.auth.authenticated,
})

export default connect(mapStateToProps)(Routes)

