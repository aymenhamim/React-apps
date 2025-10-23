import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/user";

interface CustomersItemType {
  user: User;
}

function CustomersItem({ user }: CustomersItemType) {
  return (
    <div
      className={`bg-white border-stone-400 rounded-xl text-sm flex flex-col w-full p-1 py-6 max-lg:p-4 gap-3`}
    >
      <div className="flex justify-between">
        <div>
          <p className="font-bold">{user.name}</p>
          <p className="text-sm lg-text-md text-gray-500">Moroccan Dirham</p>
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src={"http://localhost:3000/" + user?.image} />
          {/* <AvatarImage src={user.image || userImage.src} /> */}
        </Avatar>
      </div>
      <div>
        <h4 className="font-bold font-mono">{user.totalSpent + ",00"}dh</h4>
      </div>
    </div>
  );
}

export default CustomersItem;
