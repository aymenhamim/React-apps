import { FC } from 'react';
import { StyledCheckboxCustom } from './Checkbox.Styled';

interface CheckboxProps {
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  checked?: boolean;
  id?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  size = 'md',
  disabled = false,
  checked,
  id,
}) => {
  return (
    <StyledCheckboxCustom $size={size} className="container ">
      <input type="checkbox" disabled={disabled} id={id} checked={checked} />
      <span className="checkmark" />
    </StyledCheckboxCustom>
  );
};
