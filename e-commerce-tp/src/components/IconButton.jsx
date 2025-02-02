import { cva } from 'class-variance-authority';
import cn from '../utils/cn';

const IconButton = ({
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
