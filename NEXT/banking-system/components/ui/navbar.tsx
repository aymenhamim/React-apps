"use client";

import { navLinks } from "@/config/navlinks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarImage } from "./avatar";
import { Button } from "./button";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  console.log(user?.id);

  async function handleLogout() {
    dispatch(logout());
    router.push("/login");
  }

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
          <AvatarImage src={"http://localhost:3000/" + user?.image} />
        </Avatar>
        <span>{user?.name}</span>
        <Button variant={"destructive"} size={"sm"} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
