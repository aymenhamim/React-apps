import React from 'react';
import Slider from '../components/Slider';
import FiltersList from '../components/FiltersList';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Slider />
      <FiltersList />
      Home page
    </div>
  );
};

export default Home;
