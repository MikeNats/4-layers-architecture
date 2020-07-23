import React from 'react'
import Input from '../common/Input/Input'
import Button from '../common/Button/Button'
import { Props } from './types'

const LogInForm = ({
  submitForm,
  authStatus,
  validationErrors,
  updateEmail,
  updatePassword
}: Props) => (
  <form 
    className="comp-logiInForm"
    onSubmit={submitForm}>
      
    <fieldset>
      <Input 
        type="text" 
        name="email" 
        id="email"
        label="user name:"
        error={validationErrors.email}
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
        error={validationErrors.password}
        errorMessage="Mandatory field"
        onChangeHandler={updatePassword}
        required />
    </fieldset>

    <p className={ `errorMessage ${authStatus ? '' : 'hide'}` }>Invalid credentials</p>
    
    <fieldset className="align-button-fieldset-center">
      <Button
        disabled={!validationErrors.isFormValid}>
        submit</Button> 
    </fieldset>
</form>)

export default LogInForm