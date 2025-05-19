import HeroSectionProduct from "@/components/produits/HeroSection";
// import ProductCard from "@/components/produits/productCard";
import ProductGrid from "@/components/produits/ProductGrid";
import { Suspense } from "react";
import ProductsLoading from "./loading";

export const metadata = {
  title: "Produits",
};

async function Produits() {
  return (
    <div className="min-h-dvh bg-white">
      <HeroSectionProduct />

      <div className="container mx-auto px-4 py-8 bg-white ">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 mt-20 mb-10">
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-muted-foreground">
              Browse our collection of high-quality products
            </p>
          </div>

          <Suspense fallback={<ProductsLoading />}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Produits;
