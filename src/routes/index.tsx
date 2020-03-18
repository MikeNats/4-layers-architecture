import React from 'react';
import LogIn from '../pages/login/LogIn';
import Home from  '../pages/home/Home';
import PrivateRoute from  './protected'
import PATHS from './PATHS'
import {
  Switch,
  Route,
  Redirect,
  HashRouter as Router,
} from 'react-router-dom';

export default () =>  { 
  return (
    <Router>
      <Switch>
        <Route exact path={PATHS.LOGIN} component={LogIn} /> 
        <PrivateRoute exact={true} path="/" component={Home}/>
        <Redirect to="/" />
      </Switch>
    </Router>); 
}

