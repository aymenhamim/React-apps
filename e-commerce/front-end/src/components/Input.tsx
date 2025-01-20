import { cva, VariantProps } from 'class-variance-authority';
import React, { Children, InputHTMLAttributes, ReactNode } from 'react';
import cn from '../utils/cn';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariant> {
  children?: ReactNode;
  inputType: 'text' | 'password' | 'email' | 'tel';

  //   inputName: string;
  //   icon?: boolean;

  //   labelName?: string;
  // placeHolder?: string;
  //   variants: 'default' | 'dark';
}

const Input: React.FC<InputProps> = ({
  children,
  inputType = 'text',
  rounded,
  withIcon,
  className,
  ...props
}) => {
  return (
    <div className="relative inline h-fit w-full">
      {withIcon && children}
      <input
        type={inputType}
        className={cn(InputVariant({ rounded, withIcon, className }))}
        {...props}
      />
    </div>
  );
};

// const inputStyle = ' rounded-md  px-3 py-2 pr-10       mb-2';

const InputVariant = cva(
  ' w-full border border-stone-300 bg-stone-50 text-stone-600 outline-none ring-stone-300 transition-all duration-200 hover:border-stone-500 hover:bg-stone-100 focus:border-stone-500 focus:bg-stone-100 focus:ring-4 px-3 py-2 mb-2',
  {
    variants: {
      rounded: {
        none: '',
        smooth: 'rounded-md ',
        pill: 'rounded-full',
      },
      withIcon: {
        yes: 'pr-10',
        no: '',
      },
    },
    defaultVariants: {},
  },
);

export default Input;
