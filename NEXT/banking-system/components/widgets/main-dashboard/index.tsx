import SpendingEarning from "./spending-earning";

function MainDashbord() {
  return (
    <main className="flex-1 flex flex-col gap-3 ">
      <div className="h-2/3 rounded-3xl bg-[#E5E8EB]">
        <div className="bg-white h-4/6 rounded-3xl m-0.5"></div>
        <div className=" h-2/6"></div>
      </div>
      <div className="h-1/3 rounded-3xl  flex gap-3 ">
        <div className="w-2/5 flex flex-col gap-2">
          <SpendingEarning
            type="earning"
            date="Oct 2025"
            amount={"24,199.00dh"}
          />
          <SpendingEarning
            type="spending"
            date="Oct 2025"
            amount={"12,499.00dh"}
          />

          {/* <div className="bg-white rounded-2xl h-full"></div> */}
        </div>
        <div className="w-3/5 bg-white rounded-2xl"></div>
      </div>
    </main>
  );
}

export default MainDashbord;
