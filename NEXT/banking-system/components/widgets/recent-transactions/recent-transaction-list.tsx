import { Transaction } from "@/types/transactions";
import RecentTransactionItem from "./recent-transaction-item";

interface RecentTransactionListType {
  transactions: Transaction[];
}

function RecentTransactionList({ transactions }: RecentTransactionListType) {
  console.log(transactions);
  return (
    <div className="">
      {transactions.map((tr) => (
        <RecentTransactionItem transaction={tr} key={tr.id} />
      ))}
    </div>
  );
}

export default RecentTransactionList;
