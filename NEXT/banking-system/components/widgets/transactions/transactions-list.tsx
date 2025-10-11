import { Transaction } from "@/types/transactions";
import TransactionsItem from "./transactions-item";

interface TransactionsListType {
  transactions: Transaction[];
}

function TransactionsList({ transactions }: TransactionsListType) {
  return (
    <div className="flex flex-col">
      {transactions.map((transaction) => (
        <TransactionsItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionsList;
