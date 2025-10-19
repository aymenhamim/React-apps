import { Transaction } from "@/types/transactions";
import TransactionsItem from "./transactions-item";

interface TransactionsListType {
  transactions: Transaction[];
}

function TransactionsList({ transactions }: TransactionsListType) {
  return (
    <div className="flex flex-col">
      {transactions.length > 0 && (
        <table className="border-separate border-spacing-y-3">
          <tbody>
            {transactions.map((transaction) => (
              <TransactionsItem
                transaction={transaction}
                key={transaction.id}
              />
            ))}
          </tbody>
        </table>
      )}
      {transactions.length == 0 && <div>No Item</div>}
    </div>
  );
}

export default TransactionsList;
