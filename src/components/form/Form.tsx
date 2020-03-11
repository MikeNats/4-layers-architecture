
import * as React from "react";


export class Form extends React.Component {
  constructor(props: any) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }
  private async submitForm(e: React.FormEvent<HTMLFormElement>): Promise<boolean> {
    e.preventDefault();
   console.log(e)
    return true;
  }

  public render() {
    return (
    <form onSubmit={this.submitForm}>
      <fieldset>
        <label htmlFor="userName">User name: </label>
        <input type="text" name="userName" id="userName" required />
      </fieldset>
      <fieldset>
        <label htmlFor="password">password: </label>
        <input type="password" name="password" id="password" required />
      </fieldset>
      <fieldset>
      <input type="submit" value="Subscribe!" />
      </fieldset>
  </form>);
  }
}