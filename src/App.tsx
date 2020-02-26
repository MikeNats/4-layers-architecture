import React from 'react';
import routes from './routes/index';
import './App.scss';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() { 
  return (
    <section className="App">
      <header className="App-header">
      </header>
      <section className="App-main-section">
          <Router>
            {routes()}
          </Router>
      </section>
    </section>
  ); 
}

export default App;
