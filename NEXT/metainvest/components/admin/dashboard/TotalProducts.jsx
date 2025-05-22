"use client";

import { useState, useEffect, Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosInstance } from "@/store/slices/productsSlice";

const API_BASE_URL = "/backend";

function TotalProducts() {
  const [totalProducts, setTotalProducts] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsCount = async () => {
      setLoading(true);
      try {
        await axiosInstance.get(`${API_BASE_URL}/sanctum/csrf-cookie`);
        const response = await axiosInstance.get(
          `${API_BASE_URL}/api/products/count`
        );
        // setLoading(false);

        setTotalProducts(response?.data?.count);
      } catch (err) {
        setError("Failed to load products count");
      } finally {
        setLoading(false);
      }
    };
    fetchProductsCount();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Products</CardTitle>
      </CardHeader>
      <CardContent>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-3xl font-bold">{totalProducts}</p>
        )}
        {loading && <p className="text-gray-500">Loading...</p>}
      </CardContent>
    </Card>
  );
}

export default TotalProducts;
