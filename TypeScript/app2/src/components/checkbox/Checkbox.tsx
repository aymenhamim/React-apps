import { FC } from 'react';
import { StyledCheckbox } from './Checkbox.Styled';

interface CheckboxProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Checkbox: FC<CheckboxProps> = ({ size = 'md' }) => {
  return (
    <div>
      <StyledCheckbox $size={size} type="checkbox" />
      <span className="custom-check"></span>
      <p>Hello world</p>
    </div>
  );
};
