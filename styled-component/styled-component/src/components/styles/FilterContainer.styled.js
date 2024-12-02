import styled from 'styled-components';

export const StyledFilterContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: -10px 30px;
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledFilterItem = styled.a`
  background-color: rgb(243 244 246);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 6px;
  width: 100px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: lightgray;
  }
`;

export const StyledSelectFilter = styled.select`
  padding: 10px 15px;
  background-color: rgb(243 244 246);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
  outline: 0;

  &:hover {
    background-color: lightgray;
  }

  & option {
    background-color: rgb(243 244 246);
  }
`;
