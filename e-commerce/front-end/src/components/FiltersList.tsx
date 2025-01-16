import React from 'react';
import FilterItem from './FilterItem';

const FiltersList: React.FC = () => {
  const categories = [
    'Keyboard',
    'Mouse',
    'Headset',
    'Monitor',
    'Tapis gamer',
    'Webcam',
    'HautParleur',
  ];
  return (
    <div className="mt-4">
      <ul className="flex gap-3">
        <FilterItem text="All" className="bg-stone-800 text-stone-50" />
        {categories.map((c, i) => (
          <FilterItem key={i} text={c} />
        ))}
      </ul>
    </div>
  );
};

export default FiltersList;
