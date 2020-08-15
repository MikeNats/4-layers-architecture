import React from 'react'
import ReactDOM from 'react-dom'
import App from './view/components/App/App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import ErrorBoundary from './view/components/ErrorBoundary/ErrorBoundary'
import './styles/index.scss'

//@todo Page component & PrivatePage
//@todo base components & layouts
//@todo BDDS
//@todo unit tests

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>, document.getElementById('root'));
    