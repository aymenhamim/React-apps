"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getCustomers } from "@/store/slices/bankSlice";
import { useEffect } from "react";
import CustomersItem from "./customers-item";

function CustomersList() {
  const dispatch = useAppDispatch();
  const { customers: users, isNeedsFetch } = useAppSelector(
    (state) => state.bank
  );

  useEffect(() => {
    if (isNeedsFetch || users.length <= 0) {
      dispatch(getCustomers());
    }
  }, [dispatch, isNeedsFetch]);

  return (
    <div className="flex gap-2">
      {users.map((user, index) => (
        <CustomersItem key={user.id} user={user} isActive={index == 0} />
      ))}
    </div>
  );
}

export default CustomersList;
