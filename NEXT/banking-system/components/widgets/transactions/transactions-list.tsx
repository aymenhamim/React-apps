import { Transaction } from "@/types/transactions";
import TransactionsItem from "./transactions-item";

interface TransactionsListType {
  transactions: Transaction[];
}

function TransactionsList({ transactions }: TransactionsListType) {
  return (
    <div className="flex flex-col">
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <TransactionsItem key={transaction.id} transaction={transaction} />
        ))
      ) : (
        <div>No Item</div>
      )}
    </div>
  );
}

export default TransactionsList;
