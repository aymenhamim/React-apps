"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import { Button } from "../ui/button";
import EditProductForm from "./EditProductForm";

function EditProduct({ id, children }) {
  // FIXME: there is performance issue with this component, the component render in each iteration

  const [isOpen, setIsOpen] = useState(false);
  const { products } = useSelector((state) => state.products);
  const product = products?.find((product) => product.id === id);

  return (
    <div>
      <Button
        onClick={() => setIsOpen(true)}
        size={"sm"}
        variant={"outline"}
        className={"border-stone-700 mx-3"}
      >
        {children}
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold my-3">Edit Product Form</h2>
          {/* <p className="text-gray-500 mb-5">
            Are you sure you want to delete this product?
          </p> */}

          <EditProductForm product={product} setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </div>
  );
}

export default EditProduct;
