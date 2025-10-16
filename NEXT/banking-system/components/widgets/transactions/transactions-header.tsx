import { Dispatch, SetStateAction } from "react";
import TransactionsFilter from "./transactions-filter";

interface TransactionsHeaderType {
  setTransactions: Dispatch<SetStateAction<never[]>>;
}

function TransactionsHeader({ setTransactions }: TransactionsHeaderType) {
  return (
    <div className="mb-6 flex justify-between items-center flex-wrap">
      <div className="max-sm:mb-5">
        <h2 className="text-3xl font-semibold font-mono">Transactions List</h2>
        <p className="text-gray-500 mt-2">All the transactions in one place</p>
      </div>

      <TransactionsFilter setTransactions={setTransactions} />
    </div>
  );
}

export default TransactionsHeader;
