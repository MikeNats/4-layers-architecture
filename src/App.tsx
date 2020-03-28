import React from 'react'
import routes from './routes'
import { AppContext, initialAppContext } from './context'
import './App.scss';


function App() { 
  return (
    <AppContext.Provider value={initialAppContext}>
      <AppContext.Consumer>
      {context =>
        <section className={`app ${context.theme}`}>
        {routes()}
      </section>
      } 
      </AppContext.Consumer> 
    </AppContext.Provider>
  ); 
}

export default App; 