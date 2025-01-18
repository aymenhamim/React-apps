import { cva, VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import cn from '../utils/cn';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({}))}>
      {children}
    </button>
  );
};

const buttonVariants = cva('', {
  variants: {
    variant: {
      primary:
        'w-full rounded-md border border-stone-300 bg-stone-50 px-3 py-2  text-stone-600 outline-none ring-stone-300 transition-all duration-200 hover:border-stone-500 hover:bg-stone-100 focus:border-stone-500 focus:bg-stone-100 focus:ring-4 mb-2',

      secondary:
        'w-full rounded-md border bg-stone-100 border-stone-700 bg-stone-50 px-3 py-2  text-stone-50 outline-none ring-stone-300 transition-all duration-200  hover:bg-stone-300 focus:border-stone-500 focus:bg-stone-300 focus:ring-4 mb-2',
    },
    size: {
      sm: 'text-sm mx-1 my-0',
      md: 'text-sm mx-1 my-0',
      lg: 'text-sm mx-1 my-0',
      xl: 'text-sm mx-1 my-0',
      // ["3xl"]: "text-sm mx-1 my-0",
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export default Button;
