import { FC } from 'react';

interface PaginationRangeProps {
  totalPages: number;
  currentPage: number;
  limit: number;
}

const PaginationRange: FC<PaginationRangeProps> = ({
  totalPages,
  currentPage,
}) => {
  return <div>Hello from pagination{currentPage}</div>;
};
