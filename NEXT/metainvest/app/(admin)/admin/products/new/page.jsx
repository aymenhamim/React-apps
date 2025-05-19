// import { getSession } from "@/lib/actions/auth";
// import { redirect } from "next/navigation";
// import ProductForm from "@/components/admin/product-form";

import ProductForm from "@/components/admin/product-form";

export const metadata = {
  title: "Products",
};

// export default async function NewProductPage() {
export default function NewProductPage() {
  // const session = await getSession();

  // fixme: uncomment this when auth is implemented

  //   if (!session) {
  //     redirect("/login");
  //   }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Add New Product</h1>

      <ProductForm />
    </div>
  );
}
