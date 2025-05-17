"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "@/store/slices/productsSlice";

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
  const error = useSelector((state) => state.products.error);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      // console.log(data);
      dispatch(createProduct(data));

      // Reset the form after successful submission
      reset();
    } catch (err) {
      console.error(err.message);
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

          {/* Image URL */}

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Create Product</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
