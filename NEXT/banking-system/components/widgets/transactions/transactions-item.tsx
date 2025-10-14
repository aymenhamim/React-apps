import { Transaction } from "@/types/transactions";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import userImage from "@/public/images/user.jpg";
import TransactionType from "@/components/ui/transaction-type";
import { dateFromNow } from "@/lib/date";

interface TransactionsItemType {
  transaction: Transaction;
}

function TransactionsItem({ transaction }: TransactionsItemType) {
  return (
    <div className="flex justify-between items-center mb-3  flex-wrap max-sm:border-b max-sm:pb-2">
      <div className="flex gap-2 items-center">
        <Avatar className="w-12 h-12">
          {/* <AvatarImage src={transaction?.user?.image || userImage.src} /> */}
          <AvatarImage src={userImage.src} />
        </Avatar>

        <p className="max-sm:text-sm">
          {transaction.user?.name || "Aymen Hamim (unknown)"}
        </p>
      </div>
      <p className="text-gray-400 max-sm:text-sm">
        {dateFromNow(transaction.created_at)}
      </p>

      <p className="max-md:hidden">
        {transaction.description.split("DH at ")[0]}
        {"dh at "}
        <span className="font-semibold">
          {transaction.description.split("DH at ")[1]}
        </span>
      </p>
      <TransactionType type={transaction.type} />
      <p className="font-semibold max-sm:text-sm">{transaction.amount}dh</p>
    </div>
  );
}

export default TransactionsItem;
