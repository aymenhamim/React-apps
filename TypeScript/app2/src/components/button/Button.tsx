import React, { useState } from 'react';
import './button.css';

type ButtonProps = {
  children: React.ReactNode;
  fontSize: number;
  variant?: 'sm' | 'xs' | 'md' | 'xl';
  type?: 'principal' | 'secondary';
  onClick?: () => void;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
};

function Button({
  children,
  fontSize,
  variant,
  type,
  onClick,
  setCount,
}: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
