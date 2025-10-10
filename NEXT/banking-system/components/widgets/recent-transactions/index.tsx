import RecentTransactionList from "./recent-transaction-list";
import RecentTransactionsHeader from "./recent-transactions-header";

export const transactions = [
  {
    id: 1,
    user_id: 2,
    amount: 500.0,
    currency: "DH",
    description: "Deposit 500 DH",
    created_at: new Date("2025-10-01T09:15:00Z"),
    updated_at: new Date("2025-10-01T09:15:00Z"),
    type: "deposit",
  },
  {
    id: 2,
    user_id: 2,
    amount: 350.0,
    currency: "DH",
    description: "Withdraw 350 DH",
    created_at: new Date("2025-10-02T11:45:00Z"),
    updated_at: new Date("2025-10-02T11:45:00Z"),
    type: "withdrawal",
  },
  {
    id: 3,
    user_id: 1,
    amount: 1200.0,
    currency: "DH",
    description: "Deposit 1200 DH",
    created_at: new Date("2025-10-03T14:30:00Z"),
    updated_at: new Date("2025-10-03T14:30:00Z"),
    type: "deposit",
  },
  {
    id: 4,
    user_id: 3,
    amount: 200.0,
    currency: "DH",
    description: "Withdraw 200 DH",
    created_at: new Date("2025-10-04T16:00:00Z"),
    updated_at: new Date("2025-10-04T16:00:00Z"),
    type: "withdrawal",
  },
  {
    id: 5,
    user_id: 2,
    amount: 1000.0,
    currency: "DH",
    description: "Transfer 1000 DH to user #3",
    created_at: new Date("2025-10-05T10:10:00Z"),
    updated_at: new Date("2025-10-05T10:10:00Z"),
    type: "transfer",
  },
  {
    id: 6,
    user_id: 3,
    amount: 2000.0,
    currency: "DH",
    description: "Deposit 2000 DH",
    created_at: new Date("2025-10-06T12:20:00Z"),
    updated_at: new Date("2025-10-06T12:20:00Z"),
    type: "deposit",
  },
  {
    id: 7,
    user_id: 1,
    amount: 750.0,
    currency: "DH",
    description: "Withdraw 750 DH",
    created_at: new Date("2025-10-07T18:45:00Z"),
    updated_at: new Date("2025-10-07T18:45:00Z"),
    type: "withdrawal",
  },
  {
    id: 8,
    user_id: 4,
    amount: 300.0,
    currency: "DH",
    description: "Deposit 300 DH",
    created_at: new Date("2025-10-08T08:55:00Z"),
    updated_at: new Date("2025-10-08T08:55:00Z"),
    type: "deposit",
  },
  {
    id: 9,
    user_id: 3,
    amount: 150.0,
    currency: "DH",
    description: "Payment for electricity bill",
    created_at: new Date("2025-10-09T13:40:00Z"),
    updated_at: new Date("2025-10-09T13:40:00Z"),
    type: "payment",
  },
  {
    id: 10,
    user_id: 1,
    amount: 600.0,
    currency: "DH",
    description: "Transfer 600 DH to user #2",
    created_at: new Date("2025-10-10T17:25:00Z"),
    updated_at: new Date("2025-10-10T17:25:00Z"),
    type: "transfer",
  },
];

function RecentTransactions() {
  return (
    <aside className="lg:w-1/3 bg-white p-4 rounded-2xl overflow-y-auto max-h-[calc(100vh-4rem)] ">
      <RecentTransactionsHeader />
      <RecentTransactionList transactions={transactions} />
    </aside>
  );
}

export default RecentTransactions;
