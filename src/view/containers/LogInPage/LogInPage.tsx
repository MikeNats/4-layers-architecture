
import React from 'react';
import { withRouter, RouteComponentProps } from "react-router";
import { throttle } from 'lodash'
import { AppContext }  from '../../../context'
import LogInForm from '../../components/LogInForm/LogInForm'
import { submit, isFormErrorFree } from './utils'
import { LogInState} from './types';
 
class LogInPage extends React.Component<RouteComponentProps, LogInState> {
  static contextType = AppContext;

  constructor(props: RouteComponentProps) {
    super(props);
    
    this.state = {
      email:  '', 
      password: '',
      authFailed: false,
      errorEmail:false,
      errorPassword: false,
      isFormValid: false      
    };
  }
  private submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    const { state } = this;
    e.preventDefault();
 
    submit(state, this.context, this.props).catch(()=> {//@todo if 403 redirect
      this.setState({authFailed: true})
    })
  }

  private updateEmail = throttle(value => {
    if (value){
      this.setState(state => ({ 
        email: value,
        isFormValid: isFormErrorFree(state.errorEmail, state.errorPassword, value, state.password, state.email),
        errorEmail: false }))
    } else {
      this.setState(state => ({ 
        email: value,
        isFormValid: false,
        errorEmail: true }))
    }
  }, 500)

  private updatePassword = throttle(value => {
    if (value){
      this.setState(state => ({ 
        password: value,
        isFormValid: isFormErrorFree(state.errorEmail, state.errorPassword,state.email, value, state.password),
        errorPassword: false }))
    } else {
      this.setState(state => ({ 
        password: value,
        isFormValid: false,
        errorPassword: true }))       
    } 
  }, 500)
 
  public render = () => ( 
    <main className="base-layout horiz-vertic-align-layout">  
      <LogInForm 
        submitForm={this.submitForm} 
        updateEmail={this.updateEmail}
        updatePassword={this.updatePassword}
        authFailed={this.state.authFailed}
        errorEmail={this.state.errorEmail}
        errorPassword={this.state.errorPassword}
        isFormValid={this.state.isFormValid}/>
    </main>
  )
}
 

export default withRouter(LogInPage)