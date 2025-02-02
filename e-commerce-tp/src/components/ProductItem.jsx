import React, { useEffect } from 'react';
import IconButton from './IconButton';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const ProductItem = ({
  name = 'Logitech G102 white',
  description = 'improve your aiming skill and enhance the game experience',
  price = 300,
  discount = 0,
  img = '/img/product-1.jpg',
  quantity = 1,
  id = 'p1',
}) => {
  const desc = description.slice(0, 45).padEnd(48, '.');
  const navigate = useNavigate();

  const discountAmount = (price * discount) / 100 || 0;

  let newPrice = price - discountAmount;
  newPrice = newPrice.toFixed(2);

  // console.log(discountAmount, newPrice);

  function handleClick() {
    console.log('clicked');
    navigate(`/products/${id}`);
  }

  return (
    <AnimatePresence>
      <motion.div
        layoutId={`product-${id}`}
        className="max-w-[20rem] cursor-pointer overflow-hidden rounded-lg border-2 bg-stone-50 shadow-md duration-300 hover:border-stone-500 hover:bg-stone-100"
        onClick={handleClick}
      >
        <img src={img} alt={name} className="mx-auto mix-blend-multiply" />
        <div className="p-4">
          <h3 className="font-bold">{name}</h3>
          <p className="mb-3 text-sm text-stone-500">{desc}</p>
          <div className="flex w-full items-end justify-between">
            <div>
              {discount > 0 ? (
                <>
                  <p className="text-stone-500 line-through">{price}DH</p>
                  <p className="font-semibold">{newPrice} DH</p>
                </>
              ) : (
                <p className="font-semibold">{price} DH</p>
              )}
            </div>
            <IconButton icon="add" size="lg" className="h-12 w-12" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductItem;
