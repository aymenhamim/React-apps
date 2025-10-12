import PageHeader from "@/components/ui/header";
import Deposit from "@/components/widgets/deposit";
import { TransactionsCarousel } from "@/components/widgets/deposit/carousel";
import Withdraw from "@/components/widgets/withdraw";

function DepositPage() {
  return (
    <div className="max-w-screen-2xl mx-auto max-sm:mx-1 max-2xl:mx-4 mt-5 bg-white rounded-2xl relative min-h-[65dvh]  flex flex-col overflow-hidden max-lg:px-10 max-lg:py-4 px-20 py-12">
      <PageHeader
        title="Deposit Page"
        description="All the transactions in one place"
      />

      <div className="flex flex-wrap justify-between mb-3">
        <Deposit />
        <Withdraw />
      </div>

      <hr />

      <div className="mt-10">
        <TransactionsCarousel />
      </div>
    </div>
  );
}

export default DepositPage;
