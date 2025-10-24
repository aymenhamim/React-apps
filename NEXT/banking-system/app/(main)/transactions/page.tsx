"use client";

import Transactions from "@/components/widgets/transactions";
import TransactionsFooter from "@/components/widgets/transactions/transactions-footer";
import TransactionsHeader from "@/components/widgets/transactions/transactions-header";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getFilteredTransactions } from "@/store/slices/bankSlice";
import { useEffect } from "react";

function extractPageFromUrl(url: string | null) {
  const page = url?.split("page=")[1];
  return page;
}

function TransactionsPage() {
  const dispatch = useAppDispatch();
  // const isFetching = useRef(false);

  const { filteredTransactions, isNeedsFetch, pagination, filterParams } =
    useAppSelector((state) => state.bank);

  const clickLink = (url: string | null) => {
    const page = extractPageFromUrl(url);
    console.log(page);
    dispatch(
      getFilteredTransactions({
        page,
        customer: filterParams.customer,
        limit: filterParams.perPage,
        type: filterParams.type,
      })
    );
  };

  useEffect(
    function () {
      dispatch(getFilteredTransactions({}));
      // if (isNeedsFetch && !isFetching.current) {
      //   isFetching.current = true;
      // }

      // // reset isFetching
      // if (!isNeedsFetch) {
      //   isFetching.current = false;
      // }
    },
    // [filteredTransactions, isNeedsFetch, dispatch]
    [isNeedsFetch]
  );

  return (
    <div className="max-w-screen-2xl mx-auto max-sm:mx-1 max-xl:mx-2 mt-5 bg-white rounded-2xl relative min-h-[65dvh] max-h-[87dvh] flex flex-col overflow-hidden">
      <div className="overflow-y-auto flex-1 px-4 py-2 lg:px-20 lg:pt-6">
        <TransactionsHeader />
        <Transactions transactions={filteredTransactions} />
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
