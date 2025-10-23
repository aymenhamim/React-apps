"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getTransactions } from "@/store/slices/bankSlice";
import { useEffect } from "react";
import RecentTransactionList from "./recent-transaction-list";
import RecentTransactionsHeader from "./recent-transactions-header";

function RecentTransactions() {
  const dispatch = useAppDispatch();
  const { recentTransactions, isNeedsFetch } = useAppSelector(
    (state) => state.bank
  );
  useEffect(() => {
    if (isNeedsFetch) {
      dispatch(getTransactions({}));
    }
  }, [dispatch, isNeedsFetch]);

  return (
    <aside className="lg:w-1/3 bg-white p-4 rounded-2xl overflow-y-auto max-h-[calc(100vh-4rem)] ">
      <RecentTransactionsHeader />
      <RecentTransactionList transactions={recentTransactions} />
    </aside>
  );
}

export default RecentTransactions;
