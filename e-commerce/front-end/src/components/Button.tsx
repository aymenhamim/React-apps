import { cva, VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from '../utils/cn';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  rounded,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

const buttonVariants = cva(' outline-none duration-200  ', {
  variants: {
    variant: {
      primary:
        'border border-stone-300 bg-stone-800 text-stone-50 ring-stone-300 hover:border-stone-500 hover:bg-stone-600  focus:ring-4 ',

      secondary:
        'border border-stone-700 text-stone-900 bg-stone-50 ring-stone-300 hover:bg-stone-200 focus:ring-4',

      delete:
        'border border-red-700 text-white bg-red-400 ring-red-200 hover:bg-red-400 focus:ring-4',
    },
    size: {
      sm: 'text-sm p-1 py-0.5 ',
      md: 'px-2 py-1',
      lg: 'text-lg px-2 py-1.5',
      xl: 'text-lg px-4 py-2',
      full: 'py-2 text-center w-full ',
    },
    rounded: {
      smooth: 'rounded-md',
      pill: 'rounded-full',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    rounded: 'smooth',
  },
});

export default Button;
