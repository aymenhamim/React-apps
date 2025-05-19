"use client";

import { useEffect, useState } from "react";
import Modal from "../Modal";
import { Button } from "../ui/button";
import { deleteProduct, fetchProducts } from "@/store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

function DeleteProduct({ id, children, lastProductInList }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.products.currentPage);

  async function deleteData() {
    dispatch(deleteProduct(id));
    setIsOpen(false);
    toast.success("Product deleted successfully");

    setTimeout(() => {
      dispatch(
        fetchProducts(
          lastProductInList && currentPage !== 1 ? currentPage - 1 : currentPage
        )
      );
    }, 400);
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
