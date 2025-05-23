import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";

import { getCabin, getCabins } from "@/app/_lib/data-service";

import { Suspense } from "react";

// NB: this is how we can generate metadata for dynamic routes in Next.js
export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);

  return {
    title: `Cabin ${name} `,
  };
}

// NB: this is how we can generate static params for dynamic routes in Next.js
export async function generateStaticParams() {
  const cabins = await getCabins();

  const IDs = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
  return IDs;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
