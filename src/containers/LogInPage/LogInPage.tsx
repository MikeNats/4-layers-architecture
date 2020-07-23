
import React from 'react';
import { withRouter, RouteComponentProps } from "react-router";
import { throttle } from 'lodash'
import { AppContext }  from '../../context'
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
      authStatus: false,
      error: {
        email: false,
        password: false,
        isFormValid: false
      },     
    };
  }
  private submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    const { state } = this;
    e.preventDefault();
 
    submit(state, this.context, this.props).catch(()=> {//@todo if 403 redirect
      this.setState({authStatus: true})
    })
  }

  private updateEmail = throttle(value => {
    if (value){
      this.setState(state => ({ 
        email: value,
        error: {
          ...state.error,
          isFormValid: isFormErrorFree(state.error, value, state.password, state.email),
          email: false }}))
    } else {
      this.setState(state => ({ 
        email: value,
        error: {
          ...state.error,
          isFormValid: false,
          email: true }}))
    }
  }, 500)


  private updatePassword = throttle(value => {
    if (value){
      this.setState(state => ({ 
        password: value,
        error: {
          ...state.error,
          isFormValid: isFormErrorFree(state.error,state.email, value, state.password),
          password: false }}))
    } else {
      this.setState(state => ({ 
        password: value,
        error: {
          ...state.error,
          isFormValid: false,
          password: true }}))       
    }
  }, 500)

  public render = () => ( 
    <main className="base-layout horiz-vertic-align-layout">  
      <LogInForm 
        submitForm={this.submitForm} 
        updateEmail={this.updateEmail}
        updatePassword={this.updatePassword}
        authStatus={this.state.authStatus}
        validationErrors={this.state.error}/>
    </main>
  )
}


export default withRouter(LogInPage)