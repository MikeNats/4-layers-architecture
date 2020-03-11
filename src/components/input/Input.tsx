
import React from 'react';

interface InputPropsType {
  id: string,
  type: string,
  value: string,
  required: boolean,
  onChange: Function,
  className: string
}

export default (props: InputPropsType) =>(
  <input
    id={props.id}         
    type={props.type}
    value={props.value}
    required={props.required}
    onChange={props.onChange()}
    className={`form-control ${props.className}`}/>
)
