"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <Badge className="absolute top-2 right-2">{product.category}</Badge>
      </div>
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-medium text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
          {product.description}
        </p>
        {/* <p className="font-bold text-lg">${product.price.toFixed(2)}</p> */}
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full">Affichier le produit</Button>
      </CardFooter>
    </Card>
  );
}
