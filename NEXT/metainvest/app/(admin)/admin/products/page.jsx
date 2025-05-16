// import { getSession } from "@/lib/actions/auth";
// import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import ProductsList from "@/components/admin/login/products-list";

export default async function ProductsPage() {
  // fixme: uncomment this when auth is implemented
  // const session = await getSession();

  //   if (!session) {
  //     redirect("/login");
  //   }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/admin/products/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Product
          </Link>
        </Button>
      </div>

      <ProductsList />
    </div>
  );
}
