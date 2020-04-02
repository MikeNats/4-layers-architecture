import React from 'react';

type SelectPropsType= {
    id: string,
    className?: string
    options: Array<{
        name: string
        value: string
    }>
    onChangeHandler: Function
    children?:any
  } 
  
  const Select = ({
    id, 
    className = '',
    onChangeHandler,
    options,
    ...props
  }: SelectPropsType) => (
    <select 
      className={`comp-select ${className}`} 
      onChange={(e:  React.ChangeEvent<HTMLSelectElement>)=> 
        {e.persist(); onChangeHandler(e.currentTarget.value)}}
      {...props}>
        { options.map((option) => (<option key={option.name} value={option.value}> {option.value} </option>))}
    </select>);

export default Select