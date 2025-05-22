"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosInstance } from "@/store/slices/productsSlice";

const API_BASE_URL = "/backend";

function TotalProducts() {
  const [totalProducts, setTotalProducts] = useState(10);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       // Get CSRF token
  //       await axiosInstance.get(`${API_BASE_URL}/sanctum/csrf-cookie`);

  //       // Fetch products count
  //       const response = await axiosInstance.get(
  //         `${API_BASE_URL}/api/products/count`
  //       );
  //       // console.log("fqds");

  //       setTotalProducts(response.data);
  //       console.log("Total products:", response.data);
  //     } catch (err) {
  //       console.error("Error fetching products:", err);

  //       if (err.response?.status === 401) {
  //         setError("Please log in to view this data");
  //       } else {
  //         setError("Failed to load product count");
  //       }
  //     }
  //   };
  //   fetchProducts();
  // }, []);

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
      </CardContent>
    </Card>
  );
}

export default TotalProducts;
