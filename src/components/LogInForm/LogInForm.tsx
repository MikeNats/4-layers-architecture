import React from 'react'
import Input from '../common/Input/Input'
import Button from '../common/Button/Button'
import { LogInFormProps } from './types'

const LogInForm = ({
  submitForm,
  authFailed,
  errorEmail,
  errorPassword,
  isFormValid,
  updateEmail,
  updatePassword
}: LogInFormProps) => (
  <form 
    className="comp-logiInForm"
    onSubmit={submitForm}>
      
    <fieldset>
      <Input 
        type="text" 
        name="email" 
        id="email"
        label="user name:"
        error={errorEmail}
        errorMessage="Mandatory field"
        placeholder="email"
        onChangeHandler={updateEmail}
        required />
    </fieldset>

    <fieldset>
      <Input //default value
        type="text"
        name="password" 
        id="password"
        label="password:"
        placeholder="password"
        error={errorPassword}
        errorMessage="Mandatory field"
        onChangeHandler={updatePassword}
        required />
    </fieldset>

    <p className={ `errorMessage ${authFailed ? '' : 'hide'}` }>Invalid credentials</p>
    
    <fieldset className="align-button-fieldset-center">
      <Button
        disabled={!isFormValid}>
        submit</Button> 
    </fieldset>
</form>)

export default LogInForm