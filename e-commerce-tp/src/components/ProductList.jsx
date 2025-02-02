import React from 'react';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

const ProductList = ({ products }) => {
  return (
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.2 },
        },

        hidden: {
          opacity: 0,
          y: -30,
          transition: {
            delay: 0.3,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="mt-8 flex flex-wrap justify-center gap-3"
    >
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
          images={p.images}
        />
      ))}
    </motion.div>
  );
};

export default ProductList;
