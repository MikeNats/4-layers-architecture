import React, { Suspense, lazy } from 'react';
import AuthPage from '../../pages/AuthPage/AuthPage'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'; 
import Page from  './Page/Page'
import { PATHS } from '../../../enums' 
import { RoutesProps } from './types'
import {
  Switch,
  Redirect,
  HashRouter as Router, 
} from 'react-router-dom';
const TransactionsPage = lazy(() => import('../../pages/TransactionsPage/TransactionsPage'));

const Routes = ({authenticated} : RoutesProps) => 
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Page exact path={PATHS.LOGIN} component={AuthPage} /> 
        <Page exact path="/" component={TransactionsPage} protectedRoute authenticated={authenticated} hasHeaderFooter/>
        <Page exact path={PATHS.ERROR} component={ErrorPage}/> 
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Router> 

export default Routes

 