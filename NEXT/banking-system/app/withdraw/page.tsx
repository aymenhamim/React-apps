import PageHeader from "@/components/ui/header";

function WithdrawPage() {
  return (
    <div className="max-w-screen-2xl mx-auto max-sm:mx-1 max-2xl:mx-4 mt-5 bg-white rounded-2xl relative min-h-[65dvh] max-h-[87dvh] flex flex-col overflow-hidden max-lg:px-10 max-lg:py-4 px-20 py-12">
      <PageHeader
        title="Withdraw Page"
        description="All the transactions in one place"
      />
    </div>
  );
}

export default WithdrawPage;
