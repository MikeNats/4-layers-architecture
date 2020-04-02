import React from "react";

type propsType = {
  className?: string,
  children: string,
  onClickHandler: Function
  disabled?: boolean
}
 
const Button = ({
  onClickHandler, 
  className, 
  ...props  
  }: propsType) => {

  return (
    <button
      className={`comp-button ${className}`}    
      onClick={(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void => {onClickHandler(e)}}
        {...props}>
      { props.children }
    </button>
  );
}
export default Button;