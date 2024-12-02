import styled from 'styled-components';

export const Slider = styled.section`
  max-width: 1720px;
  height: 308px;
  background-color: rgb(243 244 246);
  margin: 30px;
  border-radius: 28px;
  padding: 1rem;
  position: relative;
  font-size: 25px;

  .right {
    box-sizing: content-box;
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;

    &:hover {
      background-color: lightgray;
    }
  }

  .left {
    box-sizing: content-box;
    position: absolute;
    left: 2%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    transition: 0.2s;

    &:hover {
      background-color: lightgray;
    }
  }
`;
