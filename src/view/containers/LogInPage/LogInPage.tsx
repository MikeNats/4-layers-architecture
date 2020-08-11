
import React from 'react';
import { throttle } from 'lodash'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import LogInForm from '../../components/LogInForm/LogInForm'
import { auth, isFormErrorFree } from './utils'
import { LogInState, LoginProps, LogInMapStateToProps } from './types';
import { authActions } from '../.././../store/auth/actions/auth'
import { AsyncActions } from '../.././../store/types'
import { Redirect } from "react-router-dom";
import PATHS from '../../../routes/PATHS';
class LogInPage extends React.Component<LoginProps, LogInState> {
 
  constructor(props: LoginProps) {
    super(props);
    
    this.state = {
      email:  '', 
      password: '',
      errorEmail:false,
      errorPassword: false,
      isFormValid: false,
      errorMessage: ''      
    };
  } 
  private submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    const { state } = this;
    e.preventDefault();
 
    this.props.authenticate(state.email, state.password, authActions)
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
      { !this.props.authenticated ? 
          <LogInForm
            errorCode={this.props.errorCode}  
            submitForm={this.submitForm} 
            updateEmail={this.updateEmail}
            updatePassword={this.updatePassword}
            errorEmail={this.state.errorEmail}
            errorPassword={this.state.errorPassword}
            isFormValid={this.state.isFormValid}/>
          
            : <Redirect to={ PATHS.HOME}/>
        } 
    </main> 
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  authenticate: (email: string, password: string, authActions: AsyncActions ) => 
   auth(email, password, authActions)(dispatch)
})


const mapStateToProps = (state: LogInMapStateToProps) => ({//lodash check object
  authenticated: state.auth.authenticated,
  isFetching: state.auth.isFetching,
  didInvalidate: state.auth.didInvalidate,
  errorCode: state.auth.errorCode,
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage)