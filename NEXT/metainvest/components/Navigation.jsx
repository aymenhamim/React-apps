"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "About" },
  { href: "/cart", label: "Produits" },
  { href: "/demende-devis", label: "Demande de devis" },
  //   { href: "/login", label: "Login" },
];

function Navigation() {
  const pathname = usePathname();

  // console.log(pathname);

  return (
    <div
      className={`${
        pathname !== "/about" ? "bg-stone-950 " : ""
      } text-2xl bg-transparent text-stone-50 py-5 px-30`}
    >
      <ul className="flex items-center justify-between">
        <div>
          <Link href="/Home" className="font-bold text-2xl">
            Meta Invest
          </Link>
        </div>

        <div className="flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`${
                link.href === pathname ? "font-bold underline" : ""
              } text-white text-sm`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}

          <Button variant="secondary">
            <Link href="contact-us">Contact</Link>
          </Button>
        </div>
      </ul>
    </div>
  );
}

export default Navigation;
