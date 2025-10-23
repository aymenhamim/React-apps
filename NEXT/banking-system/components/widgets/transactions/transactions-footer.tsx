import { Button } from "@/components/ui/button";

interface PaginationType {
  next_page_url: string | null;
  prev_page_url: string | null;
  links: { active: boolean; label: string; page: number; url: string }[];
  onClickButton: (url: string | null) => void;
}

function TransactionsFooter({
  next_page_url,
  prev_page_url,
  links,
  onClickButton,
}: PaginationType) {
  return (
    <div className="bg-white w-full py-4 sticky bottom-0 left-0 right-0 flex justify-end gap-1 px-20">
      <Button size="icon" onClick={() => onClickButton(prev_page_url)}>
        &#8592;
      </Button>
      {links.map((link, index) =>
        index === 0 || index == links.length - 1 ? (
          true
        ) : (
          <Button
            key={index}
            variant={"outline"}
            onClick={() => onClickButton(link.url)}
          >
            {link.label}
          </Button>
        )
      )}
      <Button size="icon" onClick={() => onClickButton(next_page_url)}>
        &#8594;
      </Button>
    </div>
  );
}

export default TransactionsFooter;
