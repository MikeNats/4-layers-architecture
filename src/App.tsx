import React from 'react'
import routes from './routes'
import { AppContext, initialAppContext } from './context'
import './App.scss';


function App() { 
  return (
    <AppContext.Provider value={initialAppContext}>
      <section className="App">
        <header className="App-header">
        </header>
        <section>
        {routes()}
        </section>
      </section>
    </AppContext.Provider>
  ); 
}

export default App;
