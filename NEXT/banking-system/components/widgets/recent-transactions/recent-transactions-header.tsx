import Link from "next/link";

function RecentTransactionsHeader() {
  return (
    <div className="flex justify-between text-sm font-semibold mb-8 mt-2">
      <p>Recent Transactions</p>
      <p className="text-indigo-600 ">
        <Link href={"/transactions"}>View all</Link>
      </p>
    </div>
  );
}

export default RecentTransactionsHeader;
