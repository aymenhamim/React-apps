import { FC, useState } from 'react';
import Table from './table';
import { getUsers } from '../../../data/users';

const Pagination: FC = () => {
  let users = getUsers();

  let [curPage, setCurPage] = useState(1);
  let [limit, setLimit] = useState(5);

  let start = curPage * limit;

  return (
    <div>
      <Table users={users.slice(curPage, limit)} />
    </div>
  );
};

export default Pagination;
