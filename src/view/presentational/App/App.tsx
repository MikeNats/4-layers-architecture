import React from 'react'
import Routes from '../../containers/Routes/Routes'
import ErrorBoundary from '../../presentational/ErrorBoundary/ErrorBoundary'
import './App.scss'; 

const App = () => 
  <section className={`app dark`}>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </section> 

export default App    