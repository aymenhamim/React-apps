import { FC } from 'react';
import { StyledTable } from './styled-table';

interface TableProps {
  users: {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    gender: string;
  }[];
}

interface User extends Object {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
}

const Table: FC<TableProps> = ({ users }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
