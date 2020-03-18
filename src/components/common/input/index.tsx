
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
}

const FormInput = ({
  id,
  name,
  type, 
  placeholder,
  onChangeHandler,
  className,
  label,
  ...props
}: InputPropsType) => {
  
  return (
    <React.Fragment>
      <label className={className} htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(
          e:  React.ChangeEvent<HTMLInputElement>
            ): void => {e.persist(); onChangeHandler(e.currentTarget.value)}}
        className={className}
        {...props}
      />
      </React.Fragment>
   )
}

FormInput.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
}

export default FormInput