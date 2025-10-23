interface SpendingEarningType {
  type: "earning" | "spending";
  date: string;
  amount: number | string;
}

function SpendingEarning({ type, date, amount }: SpendingEarningType) {
  return (
    <div className="bg-white rounded-2xl h-full px-1 md:px-8 py-2 flex max-sm:flex-col min-md:justify-between items-center">
      <div className="flex flex-col justify-around h-full">
        <div>
          <h4 className="text-lg font-semibold max-sm:text-sm">Total {type}</h4>
          <p className="text-sm font-semibold max-sm:hidden">{date}</p>
        </div>
      </div>
      <h3 className="text-xl font-bold max-sm:text-md">{amount}</h3>
      {/* <div className="w-32 h-20 bg-indigo-100 rounded-2xl border border-indigo-300"></div> */}
    </div>
  );
}

export default SpendingEarning;
