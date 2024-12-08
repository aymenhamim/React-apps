import styled from 'styled-components';

export const ModalStyled = styled.div`
  background-color: var(--base-color-white);
  min-width: 460px;
  min-height: 200px;
  padding: var(--spacing-space-250);
  border-radius: var(--border-radius-x-large);

  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 10%);
  /* box-shadow: 0px 0px 7px 15px var(--base-color-grey-100); */
  /* box-shadow: 0px 0px 3px 5px var(--base-color-grey-200); */

  #close {
    position: absolute;
    top: 7%;
    right: 5%;
    cursor: pointer;
    padding: 5px;
  }
`;
