"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const navLinksArr = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "About" },
  { href: "/produits", label: "Produits" },
  { href: "/demande-devis", label: "Demande de devis" },
  //   { href: "/login", label: "Login" },
];

const NavLinks = () => {
  const pathname = usePathname();

  {
    return (
      <>
        {navLinksArr.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className={`dsq ${
              pathname === link.href ? "font-bold underline" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}

        <Button variant="secondary" className={"rounded-full max-md:mt-4"}>
          <Link href="contact">Contact</Link>
        </Button>
      </>
    );
  }
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className=" flex justify-end ">
        <div className="hidden md:flex justify-between w-full items-center text-sm gap-10">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};

function Navbar() {
  const pathname = usePathname();
  const isTranspart = pathname === "/" || pathname === "/demande-devis";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 1px
      const isScrolled = window.scrollY > 1;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    console.log(scrolled);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // console.log("rhis navbar", isTranspart);

  return (
    <motion.header
      className={`bg-black ${
        isTranspart ? "min-md:bg-transparent" : "bg-black"
      }  sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-gray-500 text-white flex-wrap
    py-5 
    px-52 max-xl:px-20 max-lg:px-10`}
      animate={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Link href="/" className="font-bold text-2xl max-md:text-xl">
          Meta Invest
        </Link>
      </div>
      <Nav />
    </motion.header>
  );
}

export default Navbar;
