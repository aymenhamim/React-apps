import React from 'react';
import ProductItem from './ProductItem';

interface productI {
  name: string;
  description: string;
  price: number;
  discount?: number;
  img: string;
  quantity?: number;
  id: string;
}

interface ProductListI {
  products?: productI[];
}

const ProductList: React.FC<ProductListI> = ({ products }) => {
  return (
    <div className="mt-8 flex flex-wrap justify-start gap-3">
      {products?.map(p => (
        <ProductItem
          name={p.name}
          discount={p.discount}
          description={p.description}
          img={p.img}
          price={p.price}
          quantity={p.quantity}
          id={p.id}
          key={p.id}
        />
      ))}
    </div>
  );
};

export default ProductList;