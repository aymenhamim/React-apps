import styled from 'styled-components';

export const StyledFileUpload = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .drop-zone {
    height: 200px;
    background-color: lightgray;
    border: 1px dashed black;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;
