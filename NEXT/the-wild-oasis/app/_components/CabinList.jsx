import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";

async function CabinList({ filter }) {
  //noStore(); // ? This will prevent the component from being cached in component level

  const cabins = await getCabins({ filter });

  if (!cabins || cabins.length === 0) null;

  let displayedCabins;
  if (filter === "all") {
    displayedCabins = cabins;
  }

  if (filter === "small") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2);
  }

  if (filter === "medium") {
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 3 && cabin.maxCapacity <= 7
    );
  }

  if (filter === "large") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }

  console.log(displayedCabins);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
