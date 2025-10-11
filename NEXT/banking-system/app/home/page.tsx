import MainDashbord from "@/components/widgets/main-dashboard";
import RecentTransactions from "@/components/widgets/recent-transactions";

function HomePage() {
  return (
    <div className="flex flex-col-reverse lg:flex-row  gap-6 max-w-screen-2xl mx-auto p-4 ">
      <RecentTransactions />
      <MainDashbord />
    </div>
  );
}

export default HomePage;
