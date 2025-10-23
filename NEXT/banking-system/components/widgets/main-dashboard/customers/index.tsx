"use client";

import { TransactionsCarousel } from "../../deposit/carousel";
import CustomerCarousel from "./customer-carousel";
import CustomersList from "./customers-list";

function Customers() {
  return (
    <div>
      <p className="font-bold">Customers</p>
      <CustomersList />
      {/* <TransactionsCarousel /> */}
      {/* <CustomerCarousel /> */}
    </div>
  );
}

export default Customers;
