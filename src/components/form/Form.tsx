
import React from 'react';
import auth from '../../services/auth'
import {AppContext} from '../../context'
import { withRouter } from "react-router";

type LocalState = {
  userName: string
  password: string
}

type PropsState = {
  history: {
    push: Function
  }
}

class Form extends React.Component<PropsState, LocalState> {
  static contextType = AppContext;

  constructor(props: any) {
    super(props);
    
    this.state = {
      userName:  '',
      password: ''
    };

    this.updateUserName = this.updateUserName.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  private  async submitForm(e: React.FormEvent<HTMLFormElement>): Promise<any>{
    e.preventDefault();
    await auth(this.state.userName, this.state.password).then(() => {
      this.context.setAuth(true);
      this.props.history.push("/home")
    })
  }

 private updateUserName(e: React.FormEvent<HTMLInputElement>){
   this.setState({userName: e.currentTarget.value })
 }

 private updatePassword(e: React.FormEvent<HTMLInputElement>){
  this.setState({password: e.currentTarget.value })
 }

  public render() {
    return (
        <form onSubmit={this.submitForm}>
          <fieldset>
            
            <label htmlFor="userName">User name: </label>
            <input 
                type="text" onChange={(
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void => this.updateUserName(e)}
                name="userName" 
                id="userName" 
                required />
          </fieldset>
          <fieldset>
            <label htmlFor="password">password: </label>
            <input type="password" onChange={(
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void => this.updatePassword(e)} 
                name="password" id="password" required />
          </fieldset>
          <fieldset>
          <input type="submit" value="Subscribe!" />
          </fieldset>
      </form>
    )}
}

export default withRouter(Form as any)