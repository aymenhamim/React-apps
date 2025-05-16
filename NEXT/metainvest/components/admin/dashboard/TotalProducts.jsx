"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux";

function TotalProducts() {
  const { products } = useSelector((state) => state.products);
  const totalProducts = products?.length || 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Products</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{totalProducts}</p>
      </CardContent>
    </Card>
  );
}

export default TotalProducts;
