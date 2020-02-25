import React from 'react';
import routes from './routes/index';
import './App.scss';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function App() { 
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li> 
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </nav>  
          {routes()}
      </div>
    </Router>
      </header> 
    </div>
  ); 
}

export default App;
