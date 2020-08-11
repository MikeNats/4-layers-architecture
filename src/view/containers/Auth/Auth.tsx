
import React from 'react';
import { throttle } from 'lodash'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import LogInForm from '../../presentational/LogInForm/LogInForm'
import { auth, logInFormValidation } from './utils'
import { AuthState, AuthProps, AuthMapStateToProps } from './types';
import { logInActions } from '../../../store/state/auth/actions/logIn'
import { AsyncActions } from '../../../store/types'
import { Redirect } from "react-router-dom";
import PATHS from '../Routes/PATHS';
class Auth extends React.Component<AuthProps, AuthState> {
 
  constructor(props: AuthProps) { 
    super(props);
    
    this.state = {
      email:  '', 
      password: '', 
      invalidEmail: false, 
      invalidPassword: false,
      invalidFormValid: false,     
    };
  } 
  private submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    const { state } = this;
    e.preventDefault();
 
    this.props.authenticate(state.email, state.password, logInActions)
  }

  private updateEmail = throttle(userInput => {
    if (userInput){
      this.setState(state => ({ 
        email: userInput,
        invalidFormValid: logInFormValidation(state.invalidEmail, state.invalidPassword, userInput, state.password, state.email),
        invalidEmail: false }))
    } else {
      this.setState(state => ({ 
        email: userInput, 
        invalidFormValid: false,
        invalidEmail: true }))
    }
  }, 500)

  private updatePassword = throttle(userInput => {
    if (userInput){
      this.setState(state => ({ 
        password: userInput,
        invalidFormValid: logInFormValidation(state.invalidEmail, state.invalidPassword,state.email, userInput, state.password),
        invalidPassword: false }))
    } else {
      this.setState(() => ({ 
        password: userInput, 
        invalidFormValid: false,
        invalidPassword: true }))       
    } 
  }, 500)
  
  public render = () => ( 
    <main className="base-layout horiz-vertic-align-layout">  
      { !this.props.authenticated ? 
          <LogInForm
            errorCode={this.props.errorCode}  
            submitForm={this.submitForm} 
            updateEmail={this.updateEmail}
            updatePassword={this.updatePassword}
            invalidEmail={this.state.invalidEmail}
            invalidPassword={this.state.invalidPassword}
            invalidFormValid={this.state.invalidFormValid}/>
          
            : <Redirect to={ PATHS.HOME}/>
        } 
    </main> 
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  authenticate: (email: string, password: string, logInActions: AsyncActions ) => 
   auth(email, password, logInActions)(dispatch)
})


const mapStateToProps = (state: AuthMapStateToProps) => ({//lodash check object
  authenticated: state.auth.authenticated,
  isFetching: state.auth.isFetching,
  didInvalidate: state.auth.didInvalidate,
  errorCode: state.auth.errorCode,
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)