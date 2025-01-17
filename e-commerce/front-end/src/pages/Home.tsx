import React from 'react';
import Slider from '../components/Slider';
import FiltersList from '../components/FiltersList';
import ProductList from '../components/ProductList';

const productsL = [
  {
    id: 'product01',
    name: 'logitech G502',
    description:
      'Improve your gaming exprience with this mouse & use more than 11 buttons',
    price: 500,
    discount: 10,
    quantity: 5,
    img: '/img/product-1.jpg',
  },
  {
    id: 'product02',
    name: 'logitech G102',
    description:
      'Improve your gaming exprience with this mouse & use more than 5 buttons',
    price: 300,
    quantity: 10,
    img: '/img/product-1.jpg',
  },
  {
    id: 'product04',
    name: 'logitech G102',
    description:
      'Improve your gaming exprience with this mouse & use more than 5 buttons',
    price: 300,
    discount: 35,
    quantity: 10,
    img: '/img/product-1.jpg',
  },
  {
    id: 'product05',
    name: 'logitech G102',
    description:
      'Improve your gaming exprience with this mouse & use more than 5 buttons',
    price: 300,
    discount: 35,
    quantity: 10,
    img: '/img/product-1.jpg',
  },
  {
    id: 'product06',
    name: 'logitech G102',
    description:
      'Improve your gaming exprience with this mouse & use more than 5 buttons',
    price: 300,
    discount: 35,
    quantity: 10,
    img: '/img/product-1.jpg',
  },
];

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Slider />
      <FiltersList />
      <ProductList products={productsL} />
      Home page
    </div>
  );
};

export default Home;
