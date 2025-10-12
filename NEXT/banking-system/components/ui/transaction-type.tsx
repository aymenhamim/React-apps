import { Button } from "./button";

interface TransactionTypeType {
  type: "deposit" | "withdraw";
  className?: string;
}

function TransactionType({ type, className }: TransactionTypeType) {
  return (
    <div>
      <Button
        size="sm"
        className={`rounded-full ${
          type == "deposit"
            ? " bg-green-200 text-green-900 hover:bg-green-100"
            : "bg-red-200 text-red-900 hover:bg-red-100"
        } ${className}`}
      >
        {type}
      </Button>
    </div>
  );
}

export default TransactionType;
