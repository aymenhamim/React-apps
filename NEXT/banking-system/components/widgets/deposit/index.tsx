"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/store/hooks";
import { postDeposit } from "@/store/slices/bankSlice";
import { useState } from "react";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const disptach = useAppDispatch();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (parseFloat(amount) > 0) {
      disptach(postDeposit(+amount));
      setAmount("");
    }
  }

  return (
    <form className="min-xl:w-1/3 mx-auto mt-2 p-6" onSubmit={handleSubmit}>
      <Card className="py-10">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            Deposit Funds
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Enter amount"
            type="number"
            className="rounded-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button
            className="w-full rounded-full  bg-green-400 hover:bg-green-500"
            type="submit"
          >
            Deposit
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
