import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Transaction } from "@/types/transactions";
import userImage from "@/public/images/user.jpg";
import TransactionType from "@/components/ui/transaction-type";
import { dateFromNow } from "@/lib/date";

interface CustomersItemType {
  transaction: Transaction;
}

function TransactionCarouselItem({ transaction }: CustomersItemType) {
  const { user } = transaction;
  return (
    <div className="bg-white flex-1 w-1/4 h-full px-3 py-3 rounded-xl text-sm flex flex-col gap-6 ">
      <div className=" flex gap-4">
        <Avatar className="w-10 h-10">
          {/* <AvatarImage src="http://localhost:3000/images/user.jpg" /> */}
          <AvatarImage
            src={"http://localhost:3000/" + transaction.user?.image}
            loading="lazy"
          />
        </Avatar>

        <div>
          <p className="font-bold">{user?.name}</p>
          {/* <p className="text-sm lg-text-md text-gray-500">{transaction.create_at}</p> */}
          <p className="text-sm lg-text-md text-gray-500">
            {dateFromNow(transaction.created_at)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {/* <h4 className="text-md md:text-lg lg:text-2xl font-bold font-mono">{user?.totalSpent + ",00"}dh</h4> */}
        {/* <h4 className="font-bold font-mono">{transaction.amount}dh</h4> */}
        <h4 className="font-bold font-mono">{transaction.amount}dh</h4>
        <TransactionType type={transaction.type} />
      </div>
    </div>
  );
}

export default TransactionCarouselItem;
