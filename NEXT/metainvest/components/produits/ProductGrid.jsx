// This would typically come from an API or database

import ProductCard from "./productCard";

export default async function ProductGrid() {
  const res = await fetch("http://127.0.0.1:8000/api/products?pagination=10", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();
  const products = data?.data || [];

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[90dvw] md:w-[80dvw] xl:w-[80dvw] 2xl:w-[70dvw]  mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
