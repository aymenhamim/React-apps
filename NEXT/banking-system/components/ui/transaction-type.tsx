import { Button } from "./button";

interface TransactionTypeType {
  type: "deposit" | "withdraw";
}

function TransactionType({ type }: TransactionTypeType) {
  return (
    <div>
      <Button
        size="sm"
        className={`rounded-full ${
          type == "deposit"
            ? " bg-green-200 text-green-900 hover:bg-green-100"
            : "bg-red-200 text-red-900 hover:bg-red-100"
        }`}
      >
        {type}
      </Button>
    </div>
  );
}

export default TransactionType;
