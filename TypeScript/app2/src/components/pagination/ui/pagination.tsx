import { FC, useState } from 'react';
import Table from './table';
import { StyledPagination } from './pagination.styled';

interface PaginationProps {
  data: {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    gender: string;
  }[];
  limit: number;
}

const Pagination: FC<PaginationProps> = ({ data, limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / limit);

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  function handlePrev() {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
    else return;
  }

  function handleNext() {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    else return;
  }

  return (
    <>
      <Table users={currentData} />
      <StyledPagination>
        <button onClick={handlePrev}>{'<'}</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext}>{'>'}</button>
      </StyledPagination>
    </>
  );
};

export default Pagination;
