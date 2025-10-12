import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Deposit() {
  return (
    <div className="min-xl:w-1/3 mx-auto mt-2 p-6">
      <Card className="py-10">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            Deposit Funds
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Enter amount"
            type="number"
            className="rounded-full"
          />
          <Button className="w-full rounded-full  bg-green-400 hover:bg-green-500">
            Deposit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
