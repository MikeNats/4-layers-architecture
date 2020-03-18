
import React from 'react';
import auth from '../../services/auth'
import FormInput from '../common/input'
import Button from '../common/button'
import PATHS from '../../routes/PATHS'
import { withRouter, RouteComponentProps } from "react-router";
import { throttle } from 'lodash'
import { AppContext }  from '../../context'


type LocalState = {
  userName: string
  password: string
}

class LogInForm extends React.Component<RouteComponentProps, LocalState> {
  static contextType = AppContext;

  constructor(props: RouteComponentProps) {
    super(props);
    
    this.state = {
      userName:  '',
      password: ''
    };
  }

  private submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    auth(this.state.userName, this.state.password).then(() => {
      this.context.setAuth(true);
      this.props.history.push(PATHS.HOME)
    })
  }

  private updateUserName = throttle(value => {
    this.setState({ userName: value })
  }, 1000)


  private updatePassword = throttle(value => {
    this.setState({ password: value })
  }, 1000)

  public render = () => (
    <form onSubmit={this.submitForm}>
      <fieldset>
        <FormInput 
          type="text" 
          name="userName" 
          id="userName"
          label="user name:"
          onChangeHandler={this.updateUserName}
          required />
      </fieldset>

    <fieldset>
      <FormInput 
        type="text"
        name="password" 
        id="password"
        label="password:"
        onChangeHandler={this.updatePassword}
        required />
    </fieldset>

    <fieldset>
      <Button
        className="submit"
        onClickHandler={this.submitForm}>
        submit</Button> 
    </fieldset>
  </form>
  )
}

export default withRouter(LogInForm)