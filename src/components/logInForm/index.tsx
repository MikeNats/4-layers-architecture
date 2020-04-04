
import React from 'react';
import Input from '../common/input'
import Button from '../common/button'
import { withRouter, RouteComponentProps } from "react-router";
import { throttle } from 'lodash'
import { AppContext }  from '../../context'
import { LocalState, submit, isFormErrorFree } from './utils'


class LogInForm extends React.Component<RouteComponentProps, LocalState> {
  static contextType = AppContext;

  constructor(props: RouteComponentProps) {
    super(props);
    
    this.state = {
      email:  '', 
      password: '',
      validationFailed: false,
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
 
    if (!state.error.email && !state.error.password) {
      submit(this).catch(()=> {//@todo if 403 redirect
        this.setState({validationFailed: true})
      })
    } 
  }

  private updateEmail = throttle(value => {
    const { state } = this;
    if (value){
      this.setState({ 
        ...state,
        email: value,
        error: {
          ...state.error,
          isFormValid: isFormErrorFree(this.state.error, value, this.state.password, this.state.email),
          email: false }})
    } else {
      this.setState({ 
        email: value,
        error: {
          ...state.error,
          isFormValid: false,
          email: true }})
    }
  }, 500)


  private updatePassword = throttle(value => {
    const { state } = this;
    if (value){
      this.setState({ 
        ...state,
        password: value,
        error: {
          ...state.error,
          isFormValid: isFormErrorFree(this.state.error,this.state.email, value, this.state.password),
          password: false }})
    } else {
      this.setState({ 
        password: value,
        error: {
          ...state.error,
          isFormValid: false,
          password: true }})       
    }
  }, 500)

  public render = () => ( 
    <form 
      className="comp-logiInForm"
      onSubmit={this.submitForm}>
      <fieldset>
        <Input 
          type="text" 
          name="email" 
          id="email"
          label="user name:"
          error={this.state.error.email}
          errorMessage="Mandatory field"
          placeholder="email"
          onChangeHandler={this.updateEmail}
          required />
      </fieldset>

      <fieldset>
        <Input 
          type="text"
          name="password" 
          id="password"
          label="password:"
          placeholder="password"
          error={this.state.error.password}
          errorMessage="Mandatory field"
          onChangeHandler={this.updatePassword}
          required />
      </fieldset>
      <p className={ `errorMessage ${this.state.validationFailed ? '' : 'hide'}` }>Invalid credentials</p>
      <fieldset className="align-button-fieldset-center">
        <Button
          disabled={!this.state.error.isFormValid}
          onClickHandler={this.submitForm}>
          submit</Button> 
      </fieldset>
  </form>
  )
}

export default withRouter(LogInForm)