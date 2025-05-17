"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch } from "react-redux";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Price must be a positive number",
    })
    .refine((val) => val <= 10000, {
      message: "Price must be less than 10000",
    }),
  //FIXME: imageUrl: z.string().url({ message: "Invalid URL" }).optional(),
});

export default function ProductForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (e) => {
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )} */}

          {/* Name */}

          <div className="space-y-2">
            <Label htmlFor="name">Product Name *</Label>
            <Input type="text" {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Description */}

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              className="max-h-[35rem] overflow-y-auto resize-none"
              {...register("description")}
            ></Textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Price */}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price (dh) *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                {...register("price")}
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div> */}

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              // onClick={() => router.push("/admin/products")}
              // disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              //  disabled={loading}
            >
              {/* {loading ? "Creating..." : "Create Product"} */}
              Create Product
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
