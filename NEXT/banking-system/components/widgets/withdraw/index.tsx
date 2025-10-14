"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { withdraw } from "@/api/transactions";

export default function Withdraw() {
  const [amount, setAmount] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (parseFloat(amount) > 0) {
      const res = await withdraw(+amount);
      console.log(res);
      setAmount("");
    }
  }

  return (
    <form className="min-xl:w-1/3 mx-auto mt-2 p-6" onSubmit={handleSubmit}>
      <Card className="py-10">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            Withdraw Funds
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
          <Button className="w-full bg-red-500 hover:bg-red-600 rounded-full">
            Withdraw
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
