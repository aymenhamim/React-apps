import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { dateFromNow } from "@/lib/date";
import { Transaction } from "@/types/transactions";

interface RecentTransactionItemType {
  transaction: Transaction;
}

function RecentTransactionItem({ transaction }: RecentTransactionItemType) {
  return (
    <div className="flex gap-5 my-6 items-center">
      <Avatar className="w-12 h-12 ">
        <AvatarImage
          src={"http://localhost:3000/" + transaction?.user?.image}
        />
      </Avatar>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <p className="font-semibold">{transaction.user?.name}</p>
          <p className="text-gray-600 text-sm">
            {dateFromNow(transaction.created_at)}
          </p>
        </div>
        <p className={transaction.type === "deposit" ? "text-green-600" : ""}>
          {transaction.type == "withdraw"
            ? "-" + transaction.amount
            : transaction.amount}
        </p>
      </div>
    </div>
  );
}

export default RecentTransactionItem;
