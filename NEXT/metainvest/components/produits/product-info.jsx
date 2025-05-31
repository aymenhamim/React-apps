"use client";
import "@/components/admin/RteEditorStyles.css";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function extractDescription(description) {
  if (!description) return "";

  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}

export default function ProductInfo({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // const discount = product.originalPrice
  //   ? Math.round(
  //       ((product.originalPrice - product.price) / product.originalPrice) * 100
  //     )
  //   : 0;

  return (
    <div className="space-y-6">
      {/* product Name */}

      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">{product.long_title}</p>

      {/* stock Status */}

      <div className="flex items-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`}
        />
        <span
          className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}
        >
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* description */}

      <div>
        <h2 className="text-4xl font-bold my-10">Description</h2>
        <div className="flex flex-col gap-10">
          {extractDescription(product.description)}
        </div>
      </div>

      <Separator />

      {/* quantity  */}
      <div className="space-y-4">
        <div className="flex gap-3">
          <Button className="flex-1 " size="lg" disabled={!product.stock > 0}>
            <Link
              href="/demande-devis"
              className="w-full h-full flex items-center justify-center"
            >
              Demande de devis
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
