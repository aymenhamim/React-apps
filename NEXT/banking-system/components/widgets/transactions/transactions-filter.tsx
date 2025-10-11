"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function TransactionsFilter() {
  const [type, setType] = useState("");
  const [customer, setCustomer] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Select onValueChange={(e) => setType(e)} value={type}>
        <SelectTrigger className="w-fit" size="sm">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="deposit">Deposit</SelectItem>
            <SelectItem value="withdraw">Withdraw</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(e) => setCustomer(e)} value={customer}>
        <SelectTrigger className="w-fit" size="sm">
          <SelectValue placeholder="Transaction Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="deposit">Deposit</SelectItem>
            <SelectItem value="withdraw">Withdraw</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button className="px-5" size="sm" type="submit">
        Filter
      </Button>
    </form>
  );
}

export default TransactionsFilter;
