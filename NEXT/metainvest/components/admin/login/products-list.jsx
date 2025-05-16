"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultImg from "@/public/images/project-imgs/product-default.jpg";
// import { setProducts, setLoading } from "@/lib/redux/slices/productsSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { fetchProducts } from "@/store/slices/productsSlice";
import { number } from "framer-motion";
import { Button } from "../../ui/button";
import Image from "next/image";
import DeleteProduct from "@/components/admin/DeleteProduct";

export default function ProductsList() {
  const dispatch = useDispatch();
  // const { products, loading } = useSelector((state) => state.products);
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    const getData = async () => {
      dispatch(fetchProducts());
    };

    getData();
    // }, [dispatch]);
  }, [dispatch]);

  // if (loading) {
  //   return <div>Loading products...</div>;
  // }

  // if (products.length === 0) {
  //   return (
  //     <Card className="p-6 text-center">
  //       <p className="text-gray-500">
  //         No products found. Create your first product!
  //       </p>
  //     </Card>
  //   );
  // }

  return (
    <Card>
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
        <>
          {isLoading && (
            <TableBody>
              <TableRow>
                <TableCell>Loading data..</TableCell>
              </TableRow>
            </TableBody>
          )}
        </>
        <TableBody>
          {products &&
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={product.image || defaultImg}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-32 h-28 object-cover rounded-lg"
                  />
                </TableCell>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>${parseFloat(product.price).toFixed(2)}</TableCell>
                <TableCell className={"flex items-center h-30"}>
                  <Button size={"sm"}>View</Button>
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    className={"border-stone-700 mx-3"}
                  >
                    Edit
                  </Button>
                  <DeleteProduct id={product.id}>Delete</DeleteProduct>
                </TableCell>
                {/* <TableCell>{product.stock}</TableCell> */}
                <TableCell>{/* Actions would go here */}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}
