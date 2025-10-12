import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Withdraw() {
  return (
    <div className="min-xl:w-1/3 mx-auto mt-2 p-6">
      <Card className="py-10">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            Withdraw Funds
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Enter amount"
            type="number"
            className="rounded-full"
          />
          <Button className="w-full bg-red-500 hover:bg-red-600 rounded-full">
            Withdraw
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
