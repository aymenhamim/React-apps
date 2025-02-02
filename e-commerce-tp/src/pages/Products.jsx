import { useEffect } from 'react';
import Slider from '../components/Slider.jsx';
import FiltersList from '../components/FiltersList.jsx';
import ProductList from '../components/ProductList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice.js';

const Home = () => {
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
