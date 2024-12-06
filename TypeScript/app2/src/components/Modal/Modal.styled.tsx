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

  border: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;

  #close {
    position: absolute;
    top: 7%;
    right: 5%;
    cursor: pointer;
    padding: 5px;
  }
`;
