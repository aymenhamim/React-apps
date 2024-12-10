import styled, { css } from 'styled-components';

interface CheckboxCustomProps {
  $size: 'sm' | 'md' | 'lg';
}

const checkboxStyles = {
  sm: css`
    .checkmark {
      height: 16px;
      width: 16px;
    }
    .container {
      font-size: 18px;
      padding-left: 30px;
    }
    .checkmark::after {
      width: 6px;
      height: 10px;
    }
  `,
  md: css`
    .checkmark {
      height: 20px;
      width: 20px;
    }

    .checkmark::after {
      width: 7px;
      height: 12px;
    }
  `,
  lg: css`
    .checkmark {
      height: 24px;
      width: 24px;
    }
  `,
};

export const StyledCheckboxCustom = styled.label<CheckboxCustomProps>`
  display: inline;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.12);

    transition: all 0.3s ease;
  }

  input:not(:disabled):hover ~ .checkmark {
    /* box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.64); */
    box-shadow: 0 0 0px 4px rgba(103, 110, 118, 0.16);
  }
  input:focus ~ .checkmark {
    box-shadow: 0 0 1px 4px rgba(103, 110, 118, 0.16);
  }
  input:disabled ~ .checkmark {
    background-color: #e5e7ea;
    box-shadow: 0 1px 0 0px rgba(103, 110, 118, 0.16);
    box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.12);
  }

  input:checked ~ .checkmark {
    background-color: #000000;
  }

  input:checked:hover ~ .checkmark {
    /* box-shadow: 0 0 0px 1px rgba(103, 110, 118, 0.24); */
    box-shadow: 0 0 0px 4px rgba(103, 110, 118, 0.16);
  }
  input:checked:focus ~ .checkmark {
    box-shadow: 0 0 0px 4px rgba(103, 110, 118, 0.16);
  }

  input:disabled:checked ~ .checkmark {
    background-color: var(--base-color-grey-400);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.12);
  }

  .checkmark::after {
    content: '';
    position: absolute;
    display: none;

    left: 50%;
    top: 50%;

    width: 7px;
    height: 14px;
    border: solid white;
    border-width: 0 2px 2px 0;

    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: translate(-50%, -60%) rotate(45deg);
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  ${props => checkboxStyles[props.$size]}
`;

StyledCheckboxCustom.defaultProps = {
  $size: 'sm',
};
