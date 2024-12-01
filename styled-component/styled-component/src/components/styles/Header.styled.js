import styled from 'styled-components';

export const StyledHeader = styled.header`
  /* background-color: ${({ bg }) => bg}; */
  background-color: '#ffff';
  width: 100%;
  text-align: center;
  padding: 1rem 3rem;
  border-bottom: 1px lightgray solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 3rem;
`;

export const StyledLi = styled.li`
  list-style-type: none;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 8px;
    svg {
      font-size: 1.35rem;
    }
  }
  &:active {
    background-color: green;
  }

  &:hover {
    background-color: rgb(243 244 246);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`;
