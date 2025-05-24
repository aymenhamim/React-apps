"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
// import { Badge } from "@/components/ui/badge";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-200 h-full flex flex-col pt-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden w-full">
        <Image
          src={product.images[0]?.url || "/placeholder.svg"}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"} ${product.quantity > 0 ? "" : "grayscale"}`}
        />
        <Badge className="absolute top-2 right-2">
          {product.quantity > 0 ? "disponible" : "out of stock"}
        </Badge>
      </div>
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1 ">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
          {product.description}
        </p>
        {/* <p className="font-bold text-lg">${product.price.toFixed(2)}</p> */}
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full">
          <Link href={`/produits/${product.id}`}>Afficher le produit</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
