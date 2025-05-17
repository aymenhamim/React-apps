// import { getSession } from "@/lib/actions/auth";
// import { redirect } from "next/navigation";
// import ProductForm from "@/components/admin/product-form";

"use client";

import DeleteProduct from "@/components/admin/DeleteProduct";
import HomeImage from "@/components/admin/ImageUpload";
import LoginForm from "@/components/admin/login/LoginForm";
import ProductForm from "@/components/admin/product-form";
import Modal from "@/components/Modal";
import { useState } from "react";

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
      {/* <DeleteProduct id="1">Delete</DeleteProduct> */}

      {/* <HomeImage /> */}

      <ProductForm />
    </div>
  );
}
