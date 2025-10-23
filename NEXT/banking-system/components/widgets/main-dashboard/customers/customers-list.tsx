"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getCustomers } from "@/store/slices/bankSlice";
import { useEffect, useRef } from "react";
import CustomersItem from "./customers-item";

function CustomersList() {
  const isFetching = useRef(false);
  const dispatch = useAppDispatch();

  const { customers: users, isNeedsFetch } = useAppSelector(
    (state) => state.bank
  );

  useEffect(() => {
    if ((isNeedsFetch || users.length <= 0) && !isFetching.current) {
      isFetching.current = true;
      dispatch(getCustomers());
    }

    // reset isFetching
    if (!isNeedsFetch && users.length <= 0) {
      isFetching.current = false;
    }
  }, [dispatch, isNeedsFetch, users.length]);

  return (
    <div className="flex gap-2">
      {users.map((user, index) => (
        <CustomersItem key={user.id} user={user} isActive={index == 0} />
      ))}
    </div>
  );
}

export default CustomersList;
