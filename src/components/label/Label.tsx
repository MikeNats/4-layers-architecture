
import React from 'react';

interface LabelPropsType {
  for: string,
  label: string,
  className: string
}

export default (props: LabelPropsType) =>(
  <label 
    htmlFor={props.for} 
    className={`input-label ${props.className}`}> 
      {props.label} 
    </label>
)
