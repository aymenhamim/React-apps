import styled from 'styled-components';

// interface DashboardHeaderPropes {
//   $userName?: string;
// }

export const StyledDashboardHeader = styled.div`
  width: calc(100% - 100px);
  max-width: 1820px;
  margin: 0;
  /* height: 184px; */

  display: flex;
  flex-direction: column;
  padding: 0 64px 32px 64px;
  gap: 16px;
  background-color: var(--base-color-white);
  /* background-color: lightblue; */

  border-bottom: 1px solid var(--base-black-60);

  & p {
    /* font: var(--text-body-2-bold); */
    font-weight: bold;
  }

  & h1 {
    /* font-size: 64px; */
    text-transform: capitalize;
  }

  & h3 {
    /* color: var(--base-grd-1); */
    background: linear-gradient(90deg, #6cd8ff 0%, #48c5ff 50%, #0ca2ff 100%);
    font: (--text-headline-3);
    -webkit-background-clip: text;
    background-clip: text; // for compability
    -webkit-text-fill-color: transparent;

    font-weight: 700;
    font-size: 25px;
  }
`;
