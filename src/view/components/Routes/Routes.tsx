import React, { Suspense, lazy } from 'react';
import Auth from '../../pages/Auth/Auth'
import ErrorView from '../../pages/ErrorView/ErrorView'; 
import Page from  '../Page/Page'
import { PATHS } from '../../../utils' 
import { RoutesProps } from './types'
import {
  Switch,
  Redirect,
  HashRouter as Router, 
} from 'react-router-dom';
const Transactions = lazy(() => import('../../pages/Transactions/Transactions'));

const Routes = ({authenticated} : RoutesProps) => 
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Page exact path={PATHS.LOGIN} component={Auth} /> 
        <Page exact path="/" component={Transactions} protectedRoute authenticated={authenticated} hasHeaderFooter/>
        <Page exact path={PATHS.ERROR} component={ErrorView}/> 
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Router> 

export default Routes

 