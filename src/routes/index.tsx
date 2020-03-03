import React from 'react';
import LogIn from '../pages/login/LogIn';
import Home from  '../pages/home/Home';
import {
  Switch,
  Route,
  HashRouter as Router,
} from 'react-router-dom';

export default () =>  { 
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} /> 
        <Route path="/login" component={LogIn} /> 
      </Switch>
    </Router>); 
}

