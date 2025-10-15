"use client";

import Transactions from "@/components/widgets/transactions";
import TransactionsFooter from "@/components/widgets/transactions/transactions-footer";
import TransactionsHeader from "@/components/widgets/transactions/transactions-header";
import api from "@/lib/axios";
import { useEffect, useState } from "react";

// export const transactions: Transaction[] = [
//   {
//     id: 1,
//     user_id: 2,
//     amount: 500.0,
//     currency: "DH",
//     description: "Deposit 500 DH",
//     // created_at: new Date("2025-10-01T09:15:00Z"),
//     // updated_at: new Date("2025-10-01T09:15:00Z"),
//     type: "deposit",
//   },
//   {
//     id: 2,
//     user_id: 2,
//     amount: 350.0,
//     currency: "DH",
//     description: "Withdraw 350 DH",
//     // created_at: new Date("2025-10-02T11:45:00Z"),
//     // updated_at: new Date("2025-10-02T11:45:00Z"),
//     type: "withdraw",
//   },
//   {
//     id: 3,
//     user_id: 1,
//     amount: 1200.0,
//     currency: "DH",
//     description: "Deposit 1200 DH",
//     // created_at: new Date("2025-10-03T14:30:00Z"),
//     // updated_at: new Date("2025-10-03T14:30:00Z"),
//     type: "deposit",
//   },
//   {
//     id: 4,
//     user_id: 3,
//     amount: 200.0,
//     currency: "DH",
//     description: "Withdraw 200 DH",
//     // created_at: new Date("2025-10-04T16:00:00Z"),
//     // updated_at: new Date("2025-10-04T16:00:00Z"),
//     type: "withdraw",
//   },
//   {
//     id: 5,
//     user_id: 2,
//     amount: 1000.0,
//     currency: "DH",
//     description: "Transfer 1000 DH to user #3",
//     // created_at: new Date("2025-10-05T10:10:00Z"),
//     // updated_at: new Date("2025-10-05T10:10:00Z"),
//     type: "withdraw",
//   },
//   {
//     id: 6,
//     user_id: 3,
//     amount: 2000.0,
//     currency: "DH",
//     description: "Deposit 2000 DH",
//     // created_at: new Date("2025-10-06T12:20:00Z"),
//     // updated_at: new Date("2025-10-06T12:20:00Z"),
//     type: "deposit",
//   },
//   {
//     id: 7,
//     user_id: 1,
//     amount: 750.0,
//     currency: "DH",
//     description: "Withdraw 750 DH",
//     // created_at: new Date("2025-10-07T18:45:00Z"),
//     // updated_at: new Date("2025-10-07T18:45:00Z"),
//     type: "withdraw",
//   },
//   {
//     id: 8,
//     user_id: 4,
//     amount: 300.0,
//     currency: "DH",
//     description: "Deposit 300 DH",
//     // created_at: new Date("2025-10-08T08:55:00Z"),
//     // updated_at: new Date("2025-10-08T08:55:00Z"),
//     type: "deposit",
//   },
//   {
//     id: 9,
//     user_id: 3,
//     amount: 150.0,
//     currency: "DH",
//     description: "Payment for electricity bill",
//     // created_at: new Date("2025-10-09T13:40:00Z"),
//     // updated_at: new Date("2025-10-09T13:40:00Z"),
//     type: "withdraw",
//   },
//   {
//     id: 10,
//     user_id: 1,
//     amount: 600.0,
//     currency: "DH",
//     description: "Transfer 600 DH to user #2",
//     // created_at: new Date("2025-10-10T17:25:00Z"),
//     // updated_at: new Date("2025-10-10T17:25:00Z"),
//     type: "withdraw",
//   },
// ];

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const { status, data } = await api.get(
        "http://localhost:8000/api/transactions"
      );

      if (status === 200) {
        setTransactions(data.transactions.data);
      }
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto max-sm:mx-1 max-xl:mx-2 mt-5 bg-white rounded-2xl relative min-h-[65dvh] max-h-[87dvh] flex flex-col overflow-hidden">
      <div className="overflow-y-auto flex-1 px-4 py-2 lg:px-20 lg:pt-6">
        <TransactionsHeader />
        <Transactions transactions={transactions} />
      </div>

      <TransactionsFooter />
    </div>
  );
}

export default TransactionsPage;
