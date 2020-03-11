import React from 'react';
import LogIn from '../pages/login/LogIn';
import Home from  '../pages/home/Home';
import PrivateRoute from  './protected'
import {
  Switch,
  Route,
  HashRouter as Router,
} from 'react-router-dom';

export default () =>  { 
  return (
    <Router>
      <Switch>
      <Route exact path="/login" component={LogIn} /> 
      <PrivateRoute path="/*" component={Home}/>
      </Switch>
    </Router>); 
}

