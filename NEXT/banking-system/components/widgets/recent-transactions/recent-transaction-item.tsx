import { Avatar, AvatarImage } from "@/components/ui/avatar";
import userImage from "@/public/images/user.jpg";
import { Transaction } from "@/types/transactions";

interface RecentTransactionItemType {
  transaction: Transaction;
}

function RecentTransactionItem({ transaction }: RecentTransactionItemType) {
  return (
    <div className="flex gap-5 my-6 items-center">
      <Avatar className="w-12 h-12 ">
        <AvatarImage src={transaction?.user?.image || userImage.src} />
      </Avatar>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <p className="font-semibold">aymen hamim</p>
          <p className="text-gray-600 text-sm">15:30, 30 Oct</p>
        </div>
        <p className={transaction.type === "deposit" ? "text-green-600" : ""}>
          -3000dh
        </p>
      </div>
    </div>
  );
}

export default RecentTransactionItem;
