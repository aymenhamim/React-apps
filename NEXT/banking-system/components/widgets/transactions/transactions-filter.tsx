"use client";

import { fetchTransactions } from "@/api/transactions";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Transaction } from "@/types/transactions";
import { Dispatch, SetStateAction, useState } from "react";

interface TransactionsFilterType {
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
}

function TransactionsFilter({ setTransactions }: TransactionsFilterType) {
  const [type, setType] = useState("");
  const [customer, setCustomer] = useState("");
  const [perPage, setPerPage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetchTransactions({
      type,
      customer: customer,
      limit: perPage,
    });

    setTransactions(res.data.transactions.data);
  }

  return (
    <form className="flex gap-2 flex-wrap" onSubmit={handleSubmit}>
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
          <SelectValue placeholder="Customers" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="2">Aymen Hamim</SelectItem>
            <SelectItem value="1">Soufiane Hamim</SelectItem>
            <SelectItem value="3">Khadija Hamim</SelectItem>
            <SelectItem value="4">Abdessamad Hamim</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(e) => setPerPage(e)} value={perPage}>
        <SelectTrigger className="w-fit" size="sm">
          <SelectValue placeholder="Action Per Page" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
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
