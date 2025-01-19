import { cva, VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';
import cn from '../utils/cn';

interface IconBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof IconBtnVariants> {
  icon: string;
  iconSize?: string;
}

const IconButton: React.FC<IconBtnProps> = ({
  icon,
  iconSize = 'w-5',
  size,
  className,
  rounded,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(IconBtnVariants({ size, className, rounded }))}
    >
      <img src={`/icons/${icon}.svg`} alt="" className={iconSize} />
    </button>
  );
};

const IconBtnVariants = cva(
  'border border-stone-900 bg-stone-50 outline-none ring-stone-300 hover:bg-stone-200 focus:ring-4 duration-200 flex justify-center items-center',
  {
    variants: {
      size: {
        sm: 'text-sm px-0.5 py-0.5',
        md: 'px-1 py-1',
        lg: 'px-2 py-2',
      },
      rounded: {
        smooth: 'rounded-md',
        pill: 'rounded-full',
        none: '',
      },
    },
    defaultVariants: {
      size: 'md',
      rounded: 'pill',
    },
  },
);

export default IconButton;
