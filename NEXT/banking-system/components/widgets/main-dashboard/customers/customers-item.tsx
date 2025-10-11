import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/user";
import userImage from "@/public/images/user.jpg";

interface CustomersItemType {
  user: User;
  isActive: boolean;
}

function CustomersItem({ user, isActive }: CustomersItemType) {
  // function CustomersItem() {
  return (
    <div
      className={`${
        isActive ? "bg-white border-transparent" : "border-stone-400 "
      } w-1/4 h-full px-3 py-3 rounded-xl text-sm flex flex-col gap-6 border  hover:bg-white hover:border-transparent transition-all duration-200`}
    >
      <div className="flex justify-between">
        <div>
          <p className="font-bold">{user.name}</p>
          <p className="text-gray-500">Moroccan Dirham</p>
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src={userImage.src} />
          {/* <AvatarImage src={user.image || userImage.src} /> */}
        </Avatar>
      </div>
      <div>
        <h4 className="text-2xl font-bold font-mono">
          {user.totalSpent + ",00"}dh
        </h4>
      </div>
    </div>
  );
}

export default CustomersItem;
