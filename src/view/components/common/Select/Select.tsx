import React from 'react';
import {SelectProps} from './types'
   
const Select = ({
  id, 
  className = '',
  onChangeHandler,
  options,
  ...props
}: SelectProps) => (
  <select 
    className={`comp-select ${className}`} 
    onChange={(e:  React.ChangeEvent<HTMLSelectElement>)=> 
      {e.persist(); onChangeHandler(e.currentTarget.value)}}
    {...props}>
      { options.map((option) => (<option key={option.name} value={option.value} selected={option.selected || false}> {option.value} </option>))}
  </select>);

export default Select