import React from 'react';
interface ProductI {
  name?: string;
  description?: string;
  price?: number;
  discount?: number;
  img?: string;
  quantity?: number;
  id: string;
}

const ProductItem: React.FC<ProductI> = ({
  name = 'Logitech G102 white',
  description = 'improve your aiming skill and enhance the game experience',
  price = 300,
  discount = 0,
  img = '/img/product-1.jpg',
  quantity = 1,
  id = 'p1',
}) => {
  const desc = description.slice(0, 45).padEnd(48, '.');

  const discountAmount = (price * discount) / 100 || 0;

  const newPrice = price - discountAmount;
  console.log(discountAmount, newPrice);

  return (
    <div className="max-w-[20rem] cursor-pointer overflow-hidden rounded-lg border-2 bg-stone-50 shadow-md duration-300 hover:border-stone-500 hover:bg-stone-100">
      <img src={img} alt={name} className="mx-auto mix-blend-multiply" />
      <div className="p-4">
        <h3 className="font-bold">{name}</h3>
        <p className="mb-3 text-sm text-stone-500">{desc}</p>
        <div className="flex w-full justify-between">
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
          <button className="f flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-stone-800 text-stone-50">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
