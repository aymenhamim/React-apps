"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addProduct } from "@/lib/redux/slices/productsSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { createProduct } from "@/lib/actions/products";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validate form
      if (!formData.name || !formData.price) {
        throw new Error("Name and price are required");
      }

      const productData = {
        ...formData,
        price: Number.parseFloat(formData.price),
        stock: Number.parseInt(formData.stock, 10) || 0,
        id: Date.now().toString(), // In a real app, the ID would come from the database
      };

      // In a real app, you would call your API here
      const result = await createProduct(productData);

      if (result.success) {
        // Update Redux store
        dispatch(addProduct(productData));

        // Redirect to products page
        router.push("/admin/products");
      } else {
        setError(result.error || "Failed to create product");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name">Product Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($) *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                min="0"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/products")}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Product"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
