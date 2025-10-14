"use client";

import { useEffect, useState } from "react";
import { User } from "@/types/user";
import CustomersItem from "./customers-item";
import { fetchCustomers } from "@/api/auth";

const data: User[] = [];

// interface CustomersItemType {
//   users: User[];
// }

// function CustomersList({ users }: CustomersItemType) {
function CustomersList() {
  const [users, setUsers] = useState(data);
  useEffect(() => {
    async function fetchData() {
      const res = await fetchCustomers();

      if (res.status === 200) {
        console.log(res.data.data);
        setUsers(res.data.users);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex gap-2">
      {users.map((user, index) => (
        <CustomersItem key={user.id} user={user} isActive={index == 0} />
      ))}
    </div>
  );
}

export default CustomersList;
