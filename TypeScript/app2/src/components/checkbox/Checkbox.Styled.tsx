import styled, { css } from 'styled-components';

interface CheckboxCustomProps {
  $size: 'sm' | 'md' | 'lg';
}

const checkboxStyles = {
  sm: css``,
  md: css``,
  lg: css``,
};

export const StyledCheckboxCustom = styled.span<CheckboxCustomProps>`
  width: 24px; // 24px 20px 16px
  height: 24px; // 24px 20px 16px
  display: inline-block;
  border-radius: 4px;
  background-color: var(--base-color-white);
  box-shadow: 0 2px 5px 0 rgba(103, 110, 118, 0.08);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 0 1px rgba(103, 110, 118, 0.16);

  position: relative;
  cursor: pointer;
  transition: 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 14px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${props => props.$size && checkboxStyles[props.$size]}
`;

StyledCheckboxCustom.defaultProps = {
  $size: 'md',
};

export const StyledCheckbox = styled.input`
  /* display: none; // hide default checkbox */

  &:checked + .custom-check {
    background-color: black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }
  &:checked + .custom-check::after {
    opacity: 1;
  }
`;
