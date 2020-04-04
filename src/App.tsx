import React from 'react'
import routes from './routes'
import { AppContext, initialAppContext, JsonStringType} from './context'
import  fetch from './services'
import './App.scss';

type PropType = {};
type StateType = {
  config: JsonStringType
}
class App extends React.Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props);
    this.state = {
      config: {}
    }
  }
  componentDidMount() {
    fetch({
      url:'/config.json',
      method: 'get'
    }).then((res: { data: JsonStringType}) => {
      this.setState({
        config: res.data
      }) 
    })
  }
  
  render = () => {
    if (this.state.config) {
      const { config } = this.state;

     return (
      <AppContext.Provider value={{...initialAppContext, config}} >
        <AppContext.Consumer>
          { context =>
            <section className={`app ${context.theme}`}>
              {routes()}
            </section> 
          } 
        </AppContext.Consumer> 
      </AppContext.Provider>)
    } 
    return (<div>Loading ...</div>)
  }
}
export default App