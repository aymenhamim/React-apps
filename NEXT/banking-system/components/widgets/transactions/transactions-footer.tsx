import { Button } from "@/components/ui/button";

function TransactionsFooter() {
  return (
    <div className="bg-white w-full py-4 sticky bottom-0 left-0 right-0 flex justify-end gap-1 px-20">
      <Button size="icon">&#8592;</Button>
      <Button variant={"outline"}>1</Button>
      <Button variant={"outline"}>2</Button>
      <Button variant={"outline"}>3</Button>
      <Button variant={"outline"}>4</Button>
      <Button size="icon">&#8594;</Button>
    </div>
  );
}

export default TransactionsFooter;
