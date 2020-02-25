import React from 'react';
import LogIn from '../pages/login/LogIn';
import Home from  '../pages/home/Home';
import {
  Switch,
  Route,
} from 'react-router-dom';

export default () => { 
  return (
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login"> 
          <LogIn />
        </Route>
      </Switch>
  ); 
}