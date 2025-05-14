"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/lib/redux/slices/authSlice";
import { logoutUser } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Package, LogOut } from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logoutUser();
    dispatch(logout());
    router.push("/login");
  };

  const navItems = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Products",
      href: "/admin/products",
      icon: Package,
    },
  ];

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Admin Portal</h2>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center p-2 rounded-md ${
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="mr-2 h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-4 w-56">
        <Button
          variant="outline"
          className="w-full flex items-center justify-start"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
