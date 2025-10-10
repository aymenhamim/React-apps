"use client";

import { navLinks } from "@/config/navlinks";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white py-4 px-30 flex justify-between items-center">
      <div className="flex items-center justify-center font-bold gap-3">
        <div className="w-10 aspect-square bg-sky-600 rounded-md" />
        <span>Hamim Bank</span>
      </div>
      <div className="flex items-center space-x-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Button
              key={link.href}
              asChild
              variant={isActive ? "default" : "outline"}
              className="rounded-full"
            >
              <Link
                href={link.href}
                className={`flex items-center gap-2 text-sm font-medium transition`}
              >
                {link.label}
              </Link>
            </Button>
          );
        })}
      </div>
      <div className="text-sm">@aymenhamim</div>
    </nav>
  );
}

export default Navbar;
