import styled, { css } from 'styled-components';

interface CheckboxProps {
  $size: 'sm' | 'md' | 'lg';
}

const checkboxStyles = {
  sm: css``,
  md: css``,
  lg: css``,
};

export const StyledCheckbox = styled.input<CheckboxProps>`
  input[type='checkbox'] {
    display: none; // hide default checkbox
  }

  .custom-check {
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
  }

  input[type='checkbox']:checked + .custom-checkbox {
    background-color: var(--base-color-black);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }

  ${props => props.$size && checkboxStyles[props.$size]}
`;

StyledCheckbox.defaultProps = {
  $size: 'md',
};
