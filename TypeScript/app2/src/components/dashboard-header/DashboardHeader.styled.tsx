import styled from 'styled-components';

interface DashboardHeaderPropes {
  $userName?: string;
  $curDate?: Date;
}

export const StyledDashboardHeader = styled.div<DashboardHeaderPropes>`
  max-width: 1820px;
  height: 184px;
  display: flex;
  flex-direction: column;
  padding: 0 64px 32px 64px;
  gap: 16px;
`;
