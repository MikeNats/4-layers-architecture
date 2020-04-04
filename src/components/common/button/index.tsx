import React from "react";
import { PropsType } from './types'

const Button = ({
  onClickHandler, 
  className, 
  ...props  
  }: PropsType) =>(
    <button
      className={`comp-button ${className}`}    
      onClick={(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void => {onClickHandler(e)}}
        {...props}>
      { props.children }
    </button>
  );

export default Button;