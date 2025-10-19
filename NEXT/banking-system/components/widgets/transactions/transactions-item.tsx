import { Transaction } from "@/types/transactions";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import TransactionType from "@/components/ui/transaction-type";
import { dateFromNow } from "@/lib/date";

interface TransactionsItemType {
  transaction: Transaction;
}

function TransactionsItem({ transaction }: TransactionsItemType) {
  return (
    <tr className="max-sm:border-b max-sm:pb-2">
      <td className="flex gap-2 items-center">
        <Avatar className="w-12 h-12">
          {/* <AvatarImage src={transaction?.user?.image || userImage.src} /> */}
          <AvatarImage
            src={"http://localhost:3000/" + transaction?.user?.image}
          />
        </Avatar>

        <p className="max-sm:text-sm">
          {transaction.user?.name || "Aymen Hamim (unknown)"}
        </p>
      </td>
      <td className="text-gray-400 max-sm:text-sm">
        {dateFromNow(transaction.created_at)}
      </td>

      <td className="max-md:hidden">
        {transaction.description.split("DH at ")[0]}
        {"dh at "}
        <span className="font-semibold">
          {transaction.description.split("DH at ")[1]}
        </span>
      </td>

      <td>
        <TransactionType type={transaction.type} />
      </td>
      <td className="font-semibold max-sm:text-sm">{transaction.amount}dh</td>
    </tr>
  );
}

export default TransactionsItem;
