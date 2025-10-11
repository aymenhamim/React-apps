import { User } from "@/types/user";
import CustomersItem from "./customers-item";

interface CustomersItemType {
  users: User[];
}

function CustomersList({ users }: CustomersItemType) {
  return (
    <div className="flex gap-2">
      {users.map((user, index) => (
        <CustomersItem key={user.id} user={user} isActive={index == 0} />
      ))}
    </div>
  );
}

export default CustomersList;
