import React, { useState } from 'react';
import './button.css';

type ButtonProps = {
  children: React.ReactNode;
  fontSize?: number;
  variant?: 'sm' | 'xs' | 'md' | 'xl';
  type?: 'principal' | 'secondary';
  handleClick?: () => void;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
};

function Button({
  children,
  // fontSize,
  // variant,
  // type,
  handleClick,
  // setCount,
}: ButtonProps) {
  return <button onClick={handleClick}>{children}</button>;
}

export default Button;
