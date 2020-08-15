import React from 'react'
import {connect} from 'react-redux';
import { Dispatch } from 'redux'
import Select from '../common/Select/Select'
import { setTheme} from '../../../store/state/theme/actions/theme'
import { ApplicationState } from '../../../store/types'
import { ThemeProps } from './types'
import { setSelectedTheme } from './utils'


class ThemeToggler extends React.PureComponent<ThemeProps> {
  constructor(props: ThemeProps){
    super(props)
    this.setTheme = this.setTheme.bind(this);
  }

  private setTheme(theme:string):void {
    this.props.setTheme(theme);
  }

 render() {
   return (
    <section className='comp-theme'>
      <Select  
        id="theme-selector" 
        options={setSelectedTheme(this.props.theme)}
        onChangeHandler={this.setTheme}/>
    </section>
   )
 }
}
 
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTheme: (theme: string) => dispatch(setTheme(theme))
})
const mapSateToProps = (state: ApplicationState) => ({
  theme: state.theme
})

export default connect(mapSateToProps, mapDispatchToProps)(ThemeToggler)
