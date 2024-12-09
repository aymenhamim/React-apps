import { FC } from 'react';
import { StyledDashboardHeader } from './dashboardHeader.styled';

interface DashboardHeaderPropes {
  userName: string;
  curDate: Date;
}

export const DashboardHeader: FC<DashboardHeaderPropes> = ({
  userName,
  curDate,
}) => {
  return (
    <StyledDashboardHeader>
      {userName}:{`${curDate.toDateString()}`}
    </StyledDashboardHeader>
  );
};
