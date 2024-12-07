import styled, { css } from 'styled-components';
// import { ButtonProps } from './Button';

interface ButtonProps {
    children: React.ReactNode;
    type?: 'principal' | 'secondary' | 'outline';
    corner?: 'smooth' | 'pill';
  }

const buttonStyles = {
  primary: css`
    background-color: var(--base-color-black);
    color: var(---base-color-white);

    &:hover {
      background-color: var(---base-color-black-lagoon);
    }

    &:focus {
      box-shadow: 4px 0px var(---base-color-grey-200);
    }
    &:disabled {
      background-color: var(---base-color-grey-100);
    }
  `,

  secondary: css`
    background-color: white;
    color: var(-----base-color-black);
    border: 1px solid var(--grey---grey-300);

    &:hover {
      background-color: var(---base-color-grey-100);
    }

    &:focus {
      box-shadow: 4px 0px var(---base-color-grey-200);
    }
    &:disabled {
      background-color: var(---base-color-grey-100);
    }
  `,
};

export const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  transition: 0.2s;

  /* ${(type === 'primarybuttonStyles[variant]} */
`;
