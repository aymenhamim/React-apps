"use client";

import { useState } from "react";
import { Star, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <h1 className="text-3xl font-bold">{product.name}</h1>

      {/* Stock Status */}
      <div className="flex items-center gap-2">
        <div
          className={`w-2 h-2 rounded-full ${product.quantity > 0 ? "bg-green-500" : "bg-red-500"}`}
        />
        <span
          className={`text-sm font-medium ${product.quantity > 0 ? "text-green-600" : "text-red-600"}`}
        >
          {product.quantity > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      {/* description */}
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      <Separator />

      {/* quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex gap-3">
          <Button className="flex-1" size="lg" disabled={!product.inStock}>
            Demande de devis
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
          <Button variant="outline" size="lg">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
