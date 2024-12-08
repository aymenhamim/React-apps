import styled, { css } from 'styled-components';

interface ButtonProps {
  $type?: 'primary' | 'secondary' | 'outline';
  $corner?: 'smooth' | 'pill';
  $disabled?: boolean;
}

const buttonStyles = {
  primary: css`
    background-color: var(--base-color-black);

    color: var(--base-color-white);
    border: 1px solid var(--base-color-grey-300);
    /* box-shadow: 0 0 0 1px #676e76; */
    /* box-shadow: 0 1px 1px 1px #000000;  */
    /* box-shadow: 0 2px 5px 0px #676e76; */

    &:hover:not(:disabled) {
      background-color: var(--base-color-black-lagoon);
    }

    &:focus:not(:disabled) {
      box-shadow: 2px 2px 0px gray;
      box-shadow: 0 0 0 5px var(--base-color-grey-200);
      outline: none;
    }
    &:disabled {
      background-color: var(--base-color-grey-200);
      color: var(--base-color-grey-400);
      border: 1px solid var(--base-color-grey-400);
    }
  `,

  secondary: css`
    background-color: var(--base-color-white);
    color: black;
    border: 1px solid var(--base-color-grey-300);
    box-shadow: 0 2px 5px 0 rgba(103, 110, 118, 0.08);

    &:hover:not(:disabled) {
      background-color: var(--base-color-grey-100);
    }

    &:focus:not(:disabled) {
      box-shadow: 0 0 0 5px var(--base-color-grey-200);
    }
    &:disabled:not(:disabled) {
      color: var(--base-color-grey-300);
    }
  `,

  outline: css`
    background-color: transparent;
    color: var(--base-color-black);
    border: 1px solid var(--base-color-black);
    box-shadow: 0 2px 5px 0 rgba(103, 110, 118, 0.08);

    &:hover:not(:disabled) {
      background-color: var(--base-color-grey-100);
    }

    &:disabled {
      color: var(--base-color-grey-200);
      border: 1px solid var(--base-color-grey-100);
      box-shadow: 0 2px 5px 0 rgba(103, 110, 118, 0.08);
      cursor: not-allowed;
    }
  `,
};

const cornerStyles = {
  smooth: css`
    border-radius: 8px;
  `,
  pill: css`
    border-radius: 9999px;
  `,
};

export const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  transition: 0.2s;
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  outline: none;

  &:disabled {
    cursor: not-allowed;
  }

  ${props => props.$type && buttonStyles[props.$type]}
  ${props => props.$corner && cornerStyles[props.$corner]}
`;
