"use client";

import defaultImg from "@/public/images/project-imgs/product-default.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setProducts, setLoading } from "@/lib/redux/slices/productsSlice";
import DeleteProduct from "@/components/admin/DeleteProduct";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchProducts, setPage } from "@/store/slices/productsSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../../ui/button";
import EditProduct from "../EditProduct";

export default function ProductsList() {
  const dispatch = useDispatch();
  // const { products, loading } = useSelector((state) => state.products);
  const { products, isLoading, error, currentPage, lastPage } = useSelector(
    (state) => state.products
  );

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [currentPage, dispatch]);

  if (products?.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">
          No products found. Create your first product!
        </p>
      </Card>
    );
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  }

  function handleNextPage() {
    if (currentPage < lastPage) {
      dispatch(setPage(currentPage + 1));
    }
  }

  return (
    <Card>
      {error && (
        <div className="text-red-500 text-center p-4">
          <p>{error}</p>
        </div>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products &&
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="relative aspect-video w-36">
                    <Image
                      priority
                      fill
                      quality={70}
                      src={product.images[0]}
                      alt={product.name}
                      className="absolute object-cover rounded-lg"
                    />
                  </div>
                </TableCell>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{parseFloat(product.price).toFixed(2)} dh</TableCell>
                <TableCell className={"flex items-center h-30"}>
                  <Button size={"sm"}>View</Button>

                  <EditProduct id={product.id}>Edit</EditProduct>

                  <DeleteProduct id={product.id}>Delete</DeleteProduct>
                </TableCell>
                {/* <TableCell>{product.stock}</TableCell> */}
                <TableCell>{/* Actions would go here */}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {lastPage !== 1 && (
        <div className="flex space-x-2 mt-4 mx-10 justify-end">
          <button
            onClick={handlePrevPage}
            className={`px-1 py-1 rounded  transition duration-200 cursor-pointer ${currentPage === 1 ? "bg-white text-gray-500 border" : "bg-gray-200 text-black hover:bg-gray-300"}`}
          >
            <ChevronLeft />
          </button>
          {Array.from({ length: lastPage }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => dispatch(setPage(i + 1))}
              className={`px-3 py-1 rounded cursor-pointer  ${
                currentPage === i + 1
                  ? "bg-stone-950 text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className={`px-1 py-1 rounded transition  duration-200 cursor-pointer ${currentPage === lastPage ? "bg-white text-gray-500 border" : "bg-gray-200 text-black hover:bg-gray-300"}`}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </Card>
  );
}
