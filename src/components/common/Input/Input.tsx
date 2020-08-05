
import React from 'react'
import { InputProps } from './types' 

const Input = ({  
  id,
  name,
  type = '', 
  placeholder = '',
  onChangeHandler,
  checked,
  className = '',
  label, 
  error = false, 
  errorMessage = '',
  ...props
}: InputProps) => ( 
    <React.Fragment>
      <input
        id={id} 
        name={name}
        type={type}
        className={`comp-input ${className} ${error? 'error' : '' }`}
        placeholder={placeholder}
        onChange={(e:  React.ChangeEvent<HTMLInputElement>)=> 
          {e.persist(); onChangeHandler(e.currentTarget.value)}}
        {...props}/>
      <p className={`errorMessage hide ${error? 'show' : '' }`}>{errorMessage}</p>
    </React.Fragment>
  )
 
export default Input