import { FC } from 'react';
import { StyledCheckbox, StyledCheckboxCustom } from './Checkbox.Styled';

interface CheckboxProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Checkbox: FC<CheckboxProps> = ({ size = 'md' }) => {
  return (
    <div>
      <StyledCheckbox type="checkbox" />
      <StyledCheckboxCustom $size={size} className="custom-check" />
      <span className="custom-check"></span>
      <p>Hello world</p>
    </div>
  );
};
