import RecentTransactionItem from "./recent-transaction-item";
import RecentTransactionsHeader from "./recent-transactions-header";

const transaction = {
  id: 1,
  user_id: 2,
  amount: 500.0,
  currency: "DH",
  description: "Deposit 500 DH",
  created_at: new Date(),
  updated_at: new Date(),
  type: "deposit",
};

function RecentTransactions() {
  return (
    <aside className="lg:w-1/3 bg-white p-4 rounded-2xl overflow-y-auto max-h-[calc(100vh-4rem)]">
      <RecentTransactionsHeader />
      <RecentTransactionItem transaction={transaction} />
      <RecentTransactionItem transaction={transaction} />
      <RecentTransactionItem transaction={transaction} />
      <RecentTransactionItem transaction={transaction} />
      <RecentTransactionItem transaction={transaction} />
      <RecentTransactionItem transaction={transaction} />
      <RecentTransactionItem transaction={transaction} />
      <RecentTransactionItem transaction={transaction} />
      <RecentTransactionItem transaction={transaction} />
      <RecentTransactionItem transaction={transaction} />
    </aside>
  );
}

export default RecentTransactions;
