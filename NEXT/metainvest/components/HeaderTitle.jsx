import { cn } from "@/lib/utils";

export function HeaderTitle2({ color, className = "", children }) {
  let chosenColor = "";

  if (color === "white") {
    chosenColor = "text-stone-50";
  } else if (color === "black") {
    chosenColor = "text-stone-950";
  } else if (color === "red") {
    chosenColor = "text-red-600";
  }

  return (
    <h3
      className={`${chosenColor} ${className} font-semibold 
         text-4xl max-xl:text-3xl max-lg:text-xl max-md:text-lg text-center 
         py-20 max-lg:py-12 min-xl:py-26`}
    >
      {children}
    </h3>
  );
}

export function HeaderTitle1() {
  return <div></div>;
}
