import Transactions from "@/components/widgets/transactions";
import TransactionsFooter from "@/components/widgets/transactions/transactions-footer";
import TransactionsHeader from "@/components/widgets/transactions/transactions-header";

function TransactionsPage() {
  return (
    <div className="max-w-screen-2xl mx-auto mt-5 bg-white rounded-2xl relative min-h-[65dvh] max-h-[87dvh] flex flex-col overflow-hidden">
      <div className="overflow-y-auto flex-1 px-4 py-2 lg:px-20 lg:pt-6">
        <TransactionsHeader />
        <Transactions />
      </div>

      <TransactionsFooter />
    </div>
  );
}

export default TransactionsPage;
