"use client";

import { navLinks } from "@/config/navlinks";
import { Button } from "./button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import userImage from "@/public/images/users/user.jpg";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { User } from "@/types/user";

const guest: User = {
  id: 1,
  name: "guest",
  email: "test@gmail.com",
  created_at: new Date(),
  updated_at: new Date(),
  totalSpent: 1000,
  image: userImage,
};

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(guest);
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const res = await api.post("http://localhost:8000/logout");
    if (res.status == 204) {
      router.push("/login");
    }
  }

  useEffect(
    function () {
      async function fetchUser() {
        const res = await api.get("http://localhost:8000/api/user");

        if (res.status == 200) {
          setUser(res.data);
          setIsLoggedIn(true);
        }
      }
      fetchUser();
    },
    [pathname]
  );

  return (
    <nav className="w-full bg-white py-4 px-30 flex justify-between items-center">
      <div className="flex items-center justify-center font-bold gap-3">
        <div className="w-10 aspect-square bg-sky-600 rounded-md" />
        <span>Hamim Bank</span>
      </div>
      <div className="flex items-center space-x-3">
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
      <div className="text-sm flex items-center gap-3">
        <Avatar>
          {/* <AvatarImage src={userImage.src} /> */}
          <AvatarImage src={"http://localhost:3000/" + user?.image} />
        </Avatar>
        <span>@aymenhamim</span>
        {isLoggedIn && (
          <Button variant={"destructive"} size={"sm"} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
