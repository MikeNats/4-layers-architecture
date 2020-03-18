import React from "react";

type propsType = {
  className: string,
  children: string,
  onClickHandler: Function
}

const Button = ({
  onClickHandler, 
  className, 
  ...props
  }: propsType) => {

  return (
    <button
      className={className}
      onClick={(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void => {onClickHandler(e)}}>
      { props.children }
    </button>
  );
}
export default Button;