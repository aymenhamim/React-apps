"use client";

import { useEffect, useState } from "react";
import Modal from "../Modal";
import { Button } from "../ui/button";
import {
  deleteProduct,
  fetchProducts,
  findProduct,
} from "@/store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

function DeleteProduct({ id, children, lastProductInList }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { currentPage, products } = useSelector((state) => state.products);

  // ! get images urls to delete them from the server
  const imgPublicIds = products
    ?.find((product) => product.id === id)
    .images?.map((img) => img?.publicId);

  async function deleteData() {
    try {
      // Delete images from cloudinary first
      if (imgPublicIds?.length > 0) {
        const response = await fetch("/api/delete-images", {
          // Changed to plural
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ publicIds: imgPublicIds }),
        });

        if (!response.ok) {
          throw new Error("Failed to delete images");
        }

        const deleteResult = await response.json();
        console.log("Delete result:", deleteResult);
      }

      // Delete product from your database/store
      dispatch(deleteProduct(id));

      setIsOpen(false);
      toast.success("Product deleted successfully");

      setTimeout(() => {
        dispatch(
          fetchProducts(
            lastProductInList && currentPage !== 1
              ? currentPage - 1
              : currentPage
          )
        );
      }, 400);
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    }
  }

  return (
    <div>
      <Button variant="destructive" size={"sm"} onClick={() => setIsOpen(true)}>
        {children}
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold my-5">Delete Product</h2>
          <p className="text-gray-500 mb-5">
            Are you sure you want to delete this product?
          </p>
          <div className="flex space-x-4 mt-4">
            <Button variant="destructive" onClick={deleteData}>
              Delete
            </Button>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteProduct;
