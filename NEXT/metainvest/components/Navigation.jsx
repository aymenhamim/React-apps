"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "About" },
  { href: "/produits", label: "Produits" },
  { href: "/demande-devis", label: "Demande de devis" },
  //   { href: "/login", label: "Login" },
];

function Navigation() {
  const pathname = usePathname();

  // console.log(pathname);

  return (
    <nav
      className={cn(
        "text-2xl bg-transparent text-stone-50 py-5  max-sm:px-4 max-md:px-8 max-2xl:px-24 px-52 z-10",
        pathname === "/about" ? "bg-stone-950 " : ""
      )}
    >
      <ul className="flex items-center justify-between">
        <div>
          <Link href="/" className="font-bold text-2xl max-md:text-xl">
            Meta Invest
          </Link>
        </div>

        <div className="max-lg:block hidden">burger menu</div>
        <div className="flex gap-10 items-center max-lg:hidden">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={cn(
                "text-white text-sm ",
                link.href === pathname ? " font-bold underline" : ""
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}

          <Button variant="secondary" className={"rounded-full"}>
            <Link href="contact">Contact</Link>
          </Button>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
