"use client";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { editProduct, fetchProducts } from "@/store/slices/productsSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import ProductImageUploaderV2 from "./ImageUpload-v2";
import Tiptap from "./RteEditor";

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

function EditProductForm({ product, setIsOpen }) {
  const currentPage = useSelector((state) => state.products.currentPage);
  const dispatch = useDispatch();
  const [images, setImages] = useState(product.images || []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product.name || "",
      description: product.description || "",
      price: product.price?.toString() || "0",
      quantity: product.quantity?.toString() || "0",
      imageUrl: product.imageUrl || "",
    },
  });

  const onSubmit = async (data) => {
    // if (
    //   product.name === data.name &&
    //   product.description === data.description &&
    //   product.price == parseFloat(data.price) &&
    //   product.quantity == parseInt(data.quantity) &&
    //   product.imageUrl === data.imageUrl
    // ) {
    //   setIsOpen(false);
    //   return;
    // }

    dispatch(editProduct({ id: product.id, productData: { ...data, images } }));

    setIsOpen(false);

    toast.success("The product has been updated successfully.", {
      description: "The product name is " + data.name,
    });

    setTimeout(() => {
      dispatch(fetchProducts(currentPage));
    }, 300);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[50rem]">
      <div className="mt-4 w-[80%] mx-auto flex flex-col gap-8">
        {/* Images */}

        <h2 className="text-xl font-semibold mt-4">Product Images</h2>

        <div className="flex flex-wrap gap-4">
          {images.length > 0 && (
            <>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-[10rem] h-[10rem] relative overflow-hidden shadow-lg border border-stone-700 rounded-md"
                >
                  <Image
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className="object-cover"
                    fill
                    quality={70}
                  />
                  <button
                    className="absolute top-1 right-1 rounded-full text-red-500 bg-white p-0.5 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setImages((prev) => prev.filter((_, i) => i !== index));
                      // Handle image removal logic here
                    }}
                  >
                    <XIcon size={16} />
                  </button>
                </div>
              ))}
            </>
          )}

          <ProductImageUploaderV2 onImagesUploaded={setImages} />
        </div>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="w-[48%]">
            <Label htmlFor="price">Price</Label>
            <Input type="number" step="0.01" {...register("price")} />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          <div className="w-[48%]">
            <Label htmlFor="price">Quantity *</Label>
            <Input
              type="number"
              step="1"
              id="quantity"
              {...register("quantity")}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity.message}</p>
            )}
          </div>
        </div>

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
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end w-full space-x-4 mt-4 px-24">
        <Button type="submit">Edit</Button>
        <Button variant="secondary" type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default EditProductForm;
