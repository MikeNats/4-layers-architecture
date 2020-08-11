import React, { Suspense, lazy } from 'react';
import Auth from '../Auth/Auth'
import ErrorView from '../../presentational/ErrorView/ErrorView'; 
import PrivateRoute from  '../../presentational/common/PrivateRoute/PrivateRoute'
import PATHS from './PATHS' 
import {connect} from 'react-redux';
import { RoutesProps, RoutesMapStateToProps } from './types'
import {
  Switch,
  Route,
  Redirect,
  HashRouter as Router, 
} from 'react-router-dom';
const Transactions = lazy(() => import('../Transactions/Transactions'));

export class Routes extends React.Component<RoutesProps, {}>{

  render(){
    return (<Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={PATHS.LOGIN} component={Auth} /> 
          <PrivateRoute exact={true} path="/" auth={this.props.authenticated} component={Transactions} />
          <Route exact={true} path={PATHS.ERROR} component={ErrorView}/> 
          <Redirect to="/" />
        </Switch>
      </Suspense>
  </Router>)
  }
}

const mapStateToProps = (state: RoutesMapStateToProps) => ({
  authenticated: state.auth.authenticated,
})

export default connect(mapStateToProps)(Routes)

 