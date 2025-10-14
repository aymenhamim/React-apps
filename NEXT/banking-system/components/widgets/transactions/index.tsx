import TransactionsList from "./transactions-list";
import { Transaction } from "@/types/transactions";

interface TransactionsType {
  transactions: Transaction[];
}

function Transactions({ transactions }: TransactionsType) {
  return (
    <div>
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default Transactions;
