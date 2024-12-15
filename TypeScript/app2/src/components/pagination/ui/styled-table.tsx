import styled from 'styled-components';

export const StyledTable = styled.table`
  margin: 0 auto;
  width: 1000px;
  margin-bottom: 2rem;

  th,
  td {
    border: 1px solid;
    text-align: center;
  }

  tr {
    transition: all 0.3s ease-in-out;
  }
  tr:hover {
    background-color: #d4d4d4;
  }

  thead {
    tr {
      background-color: lightblue;
      transition: 0.3s;
    }
    tr:hover {
      background-color: #bedce6;
    }
    th {
      padding: 3px;
      height: 70px;
    }
  }

  tbody {
    tr {
    }
    td {
      padding: 10px;
    }
  }
`;
