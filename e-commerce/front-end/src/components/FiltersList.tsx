import React from 'react';
import FilterItem from './FilterItem';
import { useLocation } from 'react-router-dom';

const categories = [
  'Keyboard',
  'Mouse',
  'Headset',
  'Monitor',
  'TapisGamer',
  'Webcam',
  'HautParleur',
];

const FiltersList: React.FC = () => {
  const location = useLocation();
  const isActive = location.pathname === `/Home`;

  return (
    <div className="mt-8">
      <ul className="flex gap-3">
        <FilterItem
          text="All"
          className={`${isActive ? 'bg-stone-800 text-stone-50' : ''}`}
        />
        {categories.map((c, i) => (
          <FilterItem key={i} text={c} />
        ))}
      </ul>
    </div>
  );
};

export default FiltersList;
