"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createProduct } from "@/store/slices/productsSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import ProductImageUploaderV2 from "./ImageUpload-v2";
import Tiptap from "./RteEditor";
import ImageUploader from "./ImageUpload";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .refine(
      (val) => {
        // ! remove html tags for validation to check actual content

        const textContent = val.replace(/<[^>]*>/g, "").trim();
        return textContent.length > 0;
      },
      { message: "Description cannot be empty" }
    ),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Price must be a positive number",
    })
    .refine((val) => val <= 10000, {
      message: "Price must be less than 10000",
    }),

  quantity: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => !isNaN(val) && val >= 0, {
      message: "Quantity must be a positive number",
    })
    .refine((val) => val <= 10000, {
      message: "Quantity must be less than 10000",
    }),
});

export default function ProductForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [imagesArray, setImagesArray] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [description, setDescription] = useState("");

  const onSubmit = async (data) => {
    const finalData = { ...data, images: imagesArray };

    try {
      await dispatch(createProduct({ ...finalData, images: imagesArray }));

      toast.success("The product has been created successfully.", {
        description: "The product name is " + data.name,
      });

      reset();

      // redirect to dashboard
      router.push("/admin/dashboard");
    } catch (error) {
      toast.error("Failed to create product", {
        description: error.message || "Something went wrong",
      });
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}

          <div className="space-y-2">
            <Label htmlFor="name">Product Name *</Label>
            <Input type="text" {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Price */}

          <div className="flex flex-wrap justify-between">
            {/* Price */}

            <div className="space-y-2 w-[48%]">
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

            {/* Quantity */}

            <div className="space-y-2  w-[48%]">
              <Label htmlFor="quantity">Quantity *</Label>
              <Input type="number" step="1" {...register("quantity")} />
              {errors.quantity && (
                <p className="text-red-500 text-sm">
                  {errors.quantity.message}
                </p>
              )}
            </div>
          </div>

          {/* Price */}

          {/* Description  */}
          <div className="space-y-2">
            <Label>Description *</Label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Tiptap
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Enter product description..."
                />
              )}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image URL */}
          <p className="font-bold text-2xl">Add Product Images</p>

          <ImageUploader
            imgsArray={imagesArray}
            setImgsArray={setImagesArray}
          />

          {/* <HomeImage setImagesArray={setImagesArray} /> */}

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/dashboard")}
            >
              Cancel
            </Button>
            <Button type="submit">Create Product</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
