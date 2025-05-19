import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsLoading() {
  const skeletonCount = 8;

  const skeletonHeight = "220px";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: skeletonCount }).map((_, i) => (
        <div key={i} className="space-y-3 border rounded-lg p-4">
          <Skeleton className={`h-[${skeletonHeight}] w-full rounded-md`} />

          <div className="space-y-2">
            <Skeleton className="h-5 w-3/4" />

            <Skeleton className="h-6 w-1/4" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />

            {/* Button skeleton */}
            <Skeleton className="h-10 w-full mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
