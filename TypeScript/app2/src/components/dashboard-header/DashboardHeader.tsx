import { FC } from 'react';
import { StyledDashboardHeader } from './DashboardHeader.styled';

interface DashboardHeaderPropes {
  userName: string;
}

export const DashboardHeader: FC<DashboardHeaderPropes> = ({ userName }) => {
  const date = new Date().toDateString();
  const formatedDate = date.replace(' ', ', ').slice(0, -4);

  return (
    <StyledDashboardHeader>
      <p>{formatedDate}</p>
      <div>
        <h1>Hi {userName} 👋</h1>
        <h3>Discover, learn and achieve something new today</h3>
      </div>
    </StyledDashboardHeader>
  );
};
