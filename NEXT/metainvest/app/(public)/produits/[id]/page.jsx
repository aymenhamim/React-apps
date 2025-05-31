import ProductImageGallery from "@/components/produits/product-image-gallery";
import ProductInfo from "@/components/produits/product-info";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}api/products/${params.id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      if (res.status === 404) {
        notFound();
      }
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    const product = await res.json();

    if (!product || !product.id) {
      notFound();
    }

    const images = product?.images?.map((img) => img.url) || [];

    return (
      <div className="w-full min-h-dvh bg-white pt-40">
        <div className="container mx-auto px-4 py-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ProductImageGallery images={images} productName={product.name} />
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    // You could also create a custom error page instead
    throw error; // This will trigger Next.js error boundary
  }
}
