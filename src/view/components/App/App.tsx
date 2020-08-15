import React from 'react'
import Routes from '../Routes/Routes'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import {connect} from 'react-redux';
import { ApplicationState } from '../../../store/types'
import './App.scss'; 
import { AppProps } from './types'

class App extends React.PureComponent<AppProps> {

 render() {
   return (
    <section className={`app ${this.props.theme}`}>
      <ErrorBoundary>
        <Routes authenticated={this.props.authenticated}/>
      </ErrorBoundary>
    </section> 
   )
 }
}

const mapStateToProps = (state:ApplicationState) => ({
  authenticated: state.auth.authenticated,
  theme: state.theme
})

export default connect(mapStateToProps)(App)
