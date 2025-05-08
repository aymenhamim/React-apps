"use client";

import { useSelector } from "react-redux";

function page() {
  const products = useSelector((state) => state.products);
  return (
    <div>
      {products.map((p) => (
        <div key={p.id} className="bg-black text-white">
          {p.name}
        </div>
      ))}
    </div>
  );
}

export default page;
