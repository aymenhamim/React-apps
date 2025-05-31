import HeroSectionProduct from "@/components/produits/HeroSection";
// import ProductCard from "@/components/produits/productCard";
import ProductGrid from "@/components/produits/ProductGrid";
import { Suspense } from "react";
import ProductsLoading from "./loading";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Produits",
};

async function Produits() {
  return (
    <div className="min-h-dvh bg-white">
      {/* <HeroSectionProduct /> */}

      <div className="container mx-auto px-4 py-8 bg-white mb-40">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 mt-20 mb-10">
            <h1 className="text-3xl font-bold">Produits</h1>
            <p className="text-muted-foreground">
              Découvrez notre collection de produits de haute qualité
            </p>
          </div>

          <Suspense fallback={<ProductsLoading />}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Produits;
