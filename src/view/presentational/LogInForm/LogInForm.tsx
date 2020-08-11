import React from 'react'
import Input from '../common/Input/Input'
import Button from '../common/Button/Button'
import { LogInFormProps } from './types'
import { asyncErrorMessages } from '../../../service/utils'

const LogInForm = ({
  submitForm,
  invalidEmail,
  invalidPassword,
  invalidFormValid,
  updateEmail,
  updatePassword,
  errorCode = null,
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
        error={invalidEmail}
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
        error={invalidPassword}
        errorMessage="Mandatory field"
        onChangeHandler={updatePassword}
        required />
    </fieldset>

    <p className={ `errorMessage ${errorCode ? '' : 'hide'}` }>
      { errorCode ? asyncErrorMessages(errorCode) : 'Invalid credentials' }</p>
    
    <fieldset className="align-button-fieldset-center"> 
      <Button
        disabled={!invalidFormValid}>
        submit</Button> 
    </fieldset>
</form>)

export default LogInForm