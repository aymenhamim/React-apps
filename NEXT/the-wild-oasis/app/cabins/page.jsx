import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

export const metadata = {
  title: "Cabins",
};

// NB: after using searchParams the page becames dynamic so no need to use revalidate because it will be revalidated every time the page is loaded
// export const revalidate = 3600; // ? use ISR to revalidate the page every hour in route level

// note: the searchParams is used to get the query string from the URL

function Page({ searchParams }) {
  // note: when ever the searchParams changes the CabinList component will be re-rendered because it is server component

  const filter = searchParams?.capacity ?? "all";

  // CHANGE

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense
        fallback={<Spinner />}
        key={filter} // ? The key is used to re-render the component when the filter changes (the spinner)
      >
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}

export default Page;
