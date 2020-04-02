import React, { Suspense, lazy } from 'react';
import LogIn from '../pages/login';
import PrivateRoute from  './protected'
import PATHS from './PATHS'
import {
  Switch,
  Route,
  Redirect,
  HashRouter as Router,
} from 'react-router-dom';
const Home = lazy(() => import('../pages/home'));


export default () =>  { 
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={PATHS.LOGIN} component={LogIn} /> 
          <PrivateRoute exact={true} path="/" component={Home}/>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>); 
}

