import { FC, useState } from 'react';
import { getUsers } from '../../../data/users';
import Pagination from './pagination';

const Container: FC = () => {
  let users = getUsers();
  let [limit, setLimit] = useState(5);

  return (
    <div>
      Hello world <Pagination data={users} limit={limit} />
    </div>
  );
};

export default Container;
