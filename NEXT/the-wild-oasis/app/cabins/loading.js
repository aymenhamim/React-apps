import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="grid itmes-center justify-center">
      <Spinner />
      <p className="text-center text-gray-500">Loading cabin data...</p>
    </div>
  );
}

export default Loading;
