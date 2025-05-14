import { getSession } from "@/lib/actions/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default async function Dashboard() {
  //   const session = await getSession();

  // fixme: uncomment this when auth is implemented

  //   if (!session) {
  //     redirect("/login");
  //   }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button asChild>
          <Link href="/admin/products/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Product
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">No recent activity</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/admin/products">Manage Products</Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/admin/products/new">Add New Product</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
