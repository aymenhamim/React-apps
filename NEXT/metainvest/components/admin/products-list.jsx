"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { Button } from "../ui/button";

export default function ProductsList() {
  const dispatch = useDispatch();
  // const { products, loading } = useSelector((state) => state.products);
  const { products, isLoading } = useSelector((state) => state.products);
  console.log(products);

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
                  {/* {product.image || "empty"} */}

                  <div className="w-32 h-28 bg-slate-600 rounded-lg"></div>
                </TableCell>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>${parseFloat(product.price).toFixed(2)}</TableCell>
                <TableCell className={""}>
                  <Button size={"sm"}>View</Button>
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    className={"border-stone-700 mx-3"}
                  >
                    Edit
                  </Button>
                  <Button size={"sm"} variant={"destructive"}>
                    Delete
                  </Button>
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
