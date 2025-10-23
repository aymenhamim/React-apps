"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAccount } from "@/store/slices/bankSlice";
import Link from "next/link";
import { useEffect } from "react";

function Visa() {
  const dispach = useAppDispatch();
  const customer = useAppSelector((state) => state.bank.account);

  useEffect(() => {
    dispach(getAccount());
  }, [dispach, customer?.balance]);

  return (
    <div className="bg-gradient-to-tl from-indigo-500 via-purple-700 to-slate-900 h-4/6 rounded-3xl m-0.5 text-white px-6 py-3 lg:px-20 lg:py-10 flex flex-col justify-between">
      <div className="flex justify-between">
        <p className="text-[clamp(1.5rem,3vw,3rem)] font-bold ">VISA</p>
        <p className="text-[clamp(1.2rem,3vw,1.85rem)] font-mono"> **9703</p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-[clamp(1rem,2vw,1.25rem)]  font-mono">
            Total Balance
          </p>
          <p className="text-[clamp(1.5rem,2vw,2.5rem)] font-mono font-bold ml-4 my-1">
            {customer?.balance}
            {customer?.currency}
          </p>
        </div>
        <p className="text-2xl font-semibold font-mono">11/10</p>
      </div>

      <div>
        <div className="flex gap-5">
          <Button
            className="rounded-full lg:w-1/3 py-2 lg:py-6 text-xs text-lg:sm"
            asChild
          >
            <Link href={"/actions"}>Withdraw Money</Link>
          </Button>
          <Button
            className="rounded-full lg:w-1/3 py-2 lg:py-6 text-xs text-lg:sm"
            variant={"secondary"}
            asChild
          >
            <Link href={"/actions"}>Withdraw Money</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Visa;
