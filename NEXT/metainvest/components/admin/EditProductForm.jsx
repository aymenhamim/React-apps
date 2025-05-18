"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { editProduct, fetchProducts } from "@/store/slices/productsSlice";
import { toast } from "sonner";

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

function EditProductForm({ product, setIsOpen }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product.name || "",
      description: product.description || "",
      price: product.price?.toString() || "0",
      imageUrl: product.imageUrl || "",
    },
  });

  const onSubmit = async (data) => {
    if (
      product.name === data.name &&
      product.description === data.description &&
      product.price == parseFloat(data.price) &&
      product.imageUrl === data.imageUrl
    ) {
      setIsOpen(false);
      return;
    }
    dispatch(editProduct({ id: product.id, productData: data }));
    setIsOpen(false);
    toast.success("The product has been updated successfully.", {
      description: "The product name is " + data.name,
    });

    setTimeout(() => {
      dispatch(fetchProducts());
    }, 300);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[50rem]">
      <div className="mt-4 w-[80%] mx-auto flex flex-col gap-5">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            className="max-h-[15rem] overflow-y-auto resize-none"
            {...register("description")}
          ></Textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="price">Price</Label>
          <Input id="price" type="number" step="0.01" {...register("price")} />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input id="imageUrl" type="url" {...register("imageUrl")} />
          {errors.imageUrl && (
            <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>
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
