import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/presentational/App/App';
import { Provider } from 'react-redux'
import { store } from "./store/store"
import './styles/index.scss';

//@todo loader
//@todo BDDS
//@todo unit tests
//@todo webpack config

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
    