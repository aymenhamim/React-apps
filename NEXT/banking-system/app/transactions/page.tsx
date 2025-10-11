import { Button } from "@/components/ui/button";
import Transactions from "@/components/widgets/transactions";
import TransactionsHeader from "@/components/widgets/transactions/transactions-header";

function TransactionsPage() {
  return (
    <div className="max-w-screen-2xl mx-auto mt-5  bg-white rounded-2xl relative max-h-[87dvh] flex flex-col overflow-hidden">
      <div className="overflow-y-auto flex-1 px-4 py-2 lg:px-20 lg:py-10">
        <TransactionsHeader />
        <Transactions />
      </div>

      <div className="bg-white w-full py-4 sticky bottom-0 left-0 right-0 flex justify-end gap-1 px-20">
        <Button size="icon">&#8592;</Button>
        <Button variant={"outline"}>1</Button>
        <Button variant={"outline"}>2</Button>
        <Button variant={"outline"}>3</Button>
        <Button variant={"outline"}>4</Button>
        <Button size="icon">&#8594;</Button>
      </div>
    </div>
  );
}

export default TransactionsPage;
