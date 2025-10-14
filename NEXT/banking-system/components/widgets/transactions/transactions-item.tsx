import { Transaction } from "@/types/transactions";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import userImage from "@/public/images/user.jpg";
import TransactionType from "@/components/ui/transaction-type";

interface TransactionsItemType {
  transaction: Transaction;
}

function TransactionsItem({ transaction }: TransactionsItemType) {
  return (
    <div className="flex justify-between mb-3 items-center flex-wrap max-sm:border-b max-sm:pb-2">
      <div className="flex gap-2 items-center">
        <Avatar className="w-12 h-12">
          {/* <AvatarImage src={transaction?.user?.image || userImage.src} /> */}
          <AvatarImage src={userImage.src} />
        </Avatar>

        <p className="max-sm:text-sm">
          {transaction.user?.name || "Aymen Hamim (unknown)"}
        </p>
      </div>
      <p className="text-gray-400 max-sm:text-sm">14:50, 30 Oct</p>
      {/* <p className="font-semibold">{transaction.created_at}</p> */}

      <p className="font-semibold max-md:hidden">
        {transaction.description || "aymenhamim@gmail.com__"}{" "}
        {/* {transaction.user?.email || "aymenhamim@gmail.com__"}{" "} */}
      </p>
      {/* <p className="max-lg:hidden">Moroccan Dirham</p> */}
      <TransactionType type={transaction.type} />
      <p className="font-semibold max-sm:text-sm">{transaction.amount}dh</p>
    </div>
  );
}

export default TransactionsItem;
