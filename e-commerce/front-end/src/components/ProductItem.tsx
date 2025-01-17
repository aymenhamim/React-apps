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
  discount = 33,
  img = '/img/product-1.jpg',
  quantity = 1,
  id = 'pro1',
}) => {
  const data = [name, description, price, discount, img, quantity];

  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductItem;
