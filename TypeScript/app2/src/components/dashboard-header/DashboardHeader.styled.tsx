import styled from 'styled-components';

// interface DashboardHeaderPropes {
//   $userName?: string;
// }

export const StyledDashboardHeader = styled.div`
  width: 100%;
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
    font: var(--text-body-2);
    /* font-weight: bold; */
  }

  & h1 {
    /* font-size: 64px; */
    text-transform: capitalize;
    font: var(--text-headline-1-light);
  }

  & h3 {
    background: var(--base-grd-1);
    font: (--text-headline-3);
    -webkit-background-clip: text;
    background-clip: text; // for compability
    -webkit-text-fill-color: transparent;

    /* font-weight: 700; */
    /* font-size: 25px; */
    font: var(--text-headline-3);
  }
`;
