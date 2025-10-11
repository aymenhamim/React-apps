interface SpendingEarningType {
  type: "earning" | "spending";
  date: string;
  amount: number | string;
}

function SpendingEarning({ type, date, amount }: SpendingEarningType) {
  return (
    <div className="bg-white rounded-2xl h-full px-8 py-2 flex justify-between items-center">
      <div className="flex flex-col justify-around h-full">
        <div>
          <h4 className="text-lg font-semibold">Total {type}</h4>
          <p className="text-sm font-semibold">{date}</p>
        </div>
        <h3 className="text-xl font-bold">{amount}</h3>
      </div>
      <div className="w-32 h-20 bg-indigo-300 rounded-2xl"></div>
    </div>
  );
}

export default SpendingEarning;
