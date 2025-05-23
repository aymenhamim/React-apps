"use client";

import { useState } from "react";
import Modal from "../Modal";
import { Button } from "../ui/button";

function ViewProduct({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button size={"sm"} onClick={() => setIsOpen(true)}>
        {children}
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center justify-center min-w-[30rem]">
          <h2 className="text-2xl font-bold my-5">View Product</h2>
        </div>
      </Modal>
    </div>
  );
}

export default ViewProduct;
