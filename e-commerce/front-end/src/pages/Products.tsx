import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import FiltersList from '../components/FiltersList';
import ProductList from '../components/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice.js';

const productsL = [
  {
    id: 'product01',
    name: 'logitech G502',
    description:
      'Improve your gaming exprience with this mouse & use more than 11 buttons',
    price: 500,
    discount: 10,
    quantity: 5,
    img: 'https://elhaj4gamingstore.com/wp-content/uploads/2024/11/Untitled-design-2024-11-03T115202.731.png',
  },
  {
    id: 'product02',
    name: 'logitech G102',
    description:
      'Improve your gaming exprience with this mouse & use more than 5 buttons',
    price: 300,
    quantity: 10,
    img: 'https://elhaj4gamingstore.com/wp-content/uploads/2024/10/Untitled-design-2024-10-09T141515.803.jpg',
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
  // 1- Import the dispatcher from react-redux
  const dispatch = useDispatch();

  // 2- Use state by useSelectore
  const { isLoading, data } = useSelector(state => state.products);

  useEffect(
    function () {
      // fetch data
      dispatch(fetchProducts());
    },
    [dispatch],
  );

  return (
    <div className="w-full">
      <Slider />
      <FiltersList />
      {isLoading ? (
        <p className="mx-auto mt-12 w-52">Loading...</p>
      ) : (
        <ProductList products={data} />
      )}
    </div>
  );
};

export default Home;
