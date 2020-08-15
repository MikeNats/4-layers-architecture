import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import ErrorBoundary from './view/components/ErrorBoundary/ErrorBoundary'
import './styles/index.scss'

//@todo unit tests

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary reportError={true}>
      <App />
    </ErrorBoundary>
  </Provider>, document.getElementById('root'));
    