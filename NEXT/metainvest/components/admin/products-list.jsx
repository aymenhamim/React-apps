"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setLoading } from "@/lib/redux/slices/productsSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

export default function ProductsList() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));

      // In a real app, you would fetch from an API
      // For now, we'll use mock data
      const mockProducts = [
        // This would be populated from your API
      ];

      dispatch(setProducts(mockProducts));
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (products.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">
          No products found. Create your first product!
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{/* Actions would go here */}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
