import React, { Suspense, lazy } from 'react';
import LogInPage from '../containers/LogInPage/LogInPage';
import ErrorPage from '../containers/ErrorPage/ErrorPage'; 
import PrivateRoute from  './protected'
import PATHS from './PATHS' 

import {
  Switch,
  Route,
  Redirect,
  HashRouter as Router,
} from 'react-router-dom';
const Transactions = lazy(() => import('../containers/TransactionsPage/Transactions'));


export default () =>  ( 
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={PATHS.LOGIN} component={LogInPage} /> 
        <PrivateRoute exact={true} path="/" component={Transactions}/>
        <Route exact={true} path={PATHS.ERROR} component={ErrorPage}/> 
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Router>)

