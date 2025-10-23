"use client";

import Transactions from "@/components/widgets/transactions";
import TransactionsFooter from "@/components/widgets/transactions/transactions-footer";
import TransactionsHeader from "@/components/widgets/transactions/transactions-header";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getTransactions } from "@/store/slices/bankSlice";
import { Transaction } from "@/types/transactions";
import { useEffect, useRef, useState } from "react";

function extractPageFromUrl(url: string | null) {
  const page = url?.split("page=")[1];
  return page;
}

function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const dispatch = useAppDispatch();
  const isFetching = useRef(false);

  const { recentTransactions, isNeedsFetch, pagination } = useAppSelector(
    (state) => state.bank
  );

  const clickLink = (url: string) => {
    const page = extractPageFromUrl(url);
    dispatch(getTransactions({ page }));
  };
  console.log(pagination);

  useEffect(
    function () {
      setTransactions(recentTransactions);
      if (isNeedsFetch && !isFetching.current) {
        isFetching.current = true;
        dispatch(getTransactions({}));
      }

      // reset isFetching
      if (!isNeedsFetch) {
        isFetching.current = false;
      }
    },
    [recentTransactions, dispatch, isNeedsFetch]
  );

  return (
    <div className="max-w-screen-2xl mx-auto max-sm:mx-1 max-xl:mx-2 mt-5 bg-white rounded-2xl relative min-h-[65dvh] max-h-[87dvh] flex flex-col overflow-hidden">
      <div className="overflow-y-auto flex-1 px-4 py-2 lg:px-20 lg:pt-6">
        <TransactionsHeader setTransactions={setTransactions} />
        <Transactions transactions={transactions} />
      </div>

      <TransactionsFooter
        next_page_url={pagination.next_page_url}
        prev_page_url={pagination.prev_page_url}
        links={pagination.links}
        onClickButton={clickLink}
      />
    </div>
  );
}

export default TransactionsPage;
