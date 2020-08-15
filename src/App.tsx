import React from 'react'
import Routes from './view/components/Routes/Routes'
import {connect} from 'react-redux';
import { ApplicationState } from './store/types'
import { THEMES } from './enums' 

type AppProps = {
  authenticated: boolean
  theme: string
}

class App extends React.PureComponent<AppProps> {

 render() {
   return (
    <section className={`app ${this.props.theme || THEMES.LIGHT }`}>
        <Routes authenticated={this.props.authenticated}/>
    </section> 
   )
 }
}

const mapStateToProps = (state:ApplicationState) => ({
  authenticated: state.auth.authenticated,
  theme: state.theme
})

export default connect(mapStateToProps)(App)
