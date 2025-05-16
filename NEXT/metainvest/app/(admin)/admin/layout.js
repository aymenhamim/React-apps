// import { getSession } from "@/lib/actions/auth";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/login/admin-sidebar";

export default async function AdminLayout({ children }) {
  //   const session = await getSession();

  //   if (!session) {
  //     redirect("/login");
  //   }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
