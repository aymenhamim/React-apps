import styled from 'styled-components';

export const StyledDropZone = styled.form`
  margin: 2rem auto;
  text-align: center;

  &:first-child {
    width: 60%;
    background-color: #fff;
    padding: 3rem;
    margin: auto;
    border-radius: var(--spacing-space-100);
    border: 1px solid var(--base-color-grey-300);
  }

  .icon-container {
    width: fit-content;
    padding: 4rem;
    margin: 1rem auto;
    background-color: var(--base-color-grey-300);
    border-radius: var(--spacing-space-150);
  }

  img {
    max-width: 300px;
    max-height: 300px;
    object-fit: 'contain';
  }

  .underline {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;
