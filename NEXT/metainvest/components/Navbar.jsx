"use client";

import Link from "next/link";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "About" },
  { href: "/produits", label: "Produits" },
  { href: "/demande-devis", label: "Demande de devis" },
  //   { href: "/login", label: "Login" },
];

const Logo = () => {
  return <div className="logo  font-bold text-2xl text-white">MetaInvest</div>;
};

const NavLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden md:flex justify-between w-full">
          {navLinks.map((link, i) => (
            <Link href={link.href} key={i}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          {navLinks.map((link, i) => (
            <Link href={link.href} key={i}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

function Navbar() {
  return (
    <header className="bg-black sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-gray-500 text-white flex-wrap">
      <Logo />
      <NavLink />
    </header>
  );
}

export default Navbar;
