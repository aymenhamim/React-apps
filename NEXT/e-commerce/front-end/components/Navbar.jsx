"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { openAuthModal } from "@/redux/slices/authSlice";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
  //   { href: "/login", label: "Login" },
];

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md min-lg:px-28">
      <h1 className="text-2xl font-bold">🛒 SHOP</h1>
      <ul className="flex space-x-6 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:underline ${
                pathname === link.href ? "font-bold text-black" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          {/* <Link href="/login">
            <Button>Login</Button>
          </Link> */}
          <Button onClick={() => dispatch(openAuthModal())}>Login</Button>
        </li>
      </ul>
    </nav>
  );
}
