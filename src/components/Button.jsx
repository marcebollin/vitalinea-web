import React from 'react';
import '../styles/Button.scss'

const Button = ({ type, children, filled, handleClick, index}) => {
  const filledClass = filled ? "filled" : "";
  return (
    <button
      value={index} 
      onClick={handleClick}
      className={`Button ${type} ${filledClass}`}
    >
      {children}
    </button>
  );
}
 
export default Button;