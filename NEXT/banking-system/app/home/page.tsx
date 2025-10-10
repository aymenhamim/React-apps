import RecentTransactions from "@/components/widgets/recent-transactions";

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-screen-xl mx-auto p-4 ">
      <RecentTransactions />
      <main className="flex-1 flex flex-col gap-6 bg-green-500">dsqdqs</main>
    </div>
  );
}

export default HomePage;
