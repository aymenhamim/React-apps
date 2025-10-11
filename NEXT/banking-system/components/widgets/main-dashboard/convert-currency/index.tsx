import { Button } from "@/components/ui/button";

function ConvertCurrency() {
  return (
    <div className="px-10 py-5">
      <h4 className="text-lg font-semibold py-4">Convert Currency</h4>

      <div className="mb-5">
        <p className="font-semibold text-gray-400 mb-1">Exchange from</p>
        <div className="flex items-center gap-10">
          <h3 className="font-bold font-mono text-3xl">$3,215.00</h3>
          <Button className="rounded-full " variant={"secondary"}>
            USD
          </Button>
        </div>
      </div>

      <div>
        <p className="font-semibold text-gray-400 mb-1">To</p>
        <div className="flex items-center gap-10">
          <h3 className="font-bold font-mono text-3xl">£2,528.71</h3>
          <Button className="rounded-full " variant={"secondary"}>
            USD
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConvertCurrency;
