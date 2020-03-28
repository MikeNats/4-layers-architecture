
import React from 'react';

interface InputPropsType {
  id: string,
  type: string,
  name: string
  required: boolean,
  onChangeHandler: Function
  className: string,
  label: string,
  placeholder: string
  error:boolean;
  errorMessage:string
}

const Input = ({
  id,
  name,
  type, 
  placeholder,
  onChangeHandler,
  className,
  label,
  error,
  errorMessage,
  ...props
}: InputPropsType) => {

  return (
    <React.Fragment>
      <input
        id={id} 
        name={name}
        type={type}
        className={`comp-input ${className} ${error? 'error' : '' }`}
        placeholder={placeholder}
        onChange={(e:  React.ChangeEvent<HTMLInputElement>)=> 
          {e.persist(); onChangeHandler(e.currentTarget.value)}}
        {...props}
      />
      <p className={`errorMessage hide ${error? 'show' : '' }`}>{errorMessage}</p>
    </React.Fragment>
  )
}
 
Input.defaultProps = {
  type: 'text', 
  className: '',
  placeholder: '',
  errorMessage: '',
  error: false
}

export default Input