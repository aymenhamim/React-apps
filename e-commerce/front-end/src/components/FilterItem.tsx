import React from 'react';
import { Link, useLocation } from 'react-router-dom';
interface FilterItemI {
  text?: string;
  filter?: string;
  className?: string;
}

const FilterItem: React.FC<FilterItemI> = ({
  text = 'unknown',
  filter,
  className,
}) => {
  const location = useLocation();

  // Check if the current URL matches the active category/product
  const isActive = location.search === `?product=${text}`;

  return (
    <li>
      <Link
        className={`rounded-md border border-stone-500 px-3 py-2 ${
          isActive ? 'bg-stone-800 text-stone-50' : 'bg-stone-50'
        } bg-stone-50 px-3 py-2 ${className}`}
        // to={`?category=${text}`}
        to={`?product=${text}`}
      >
        {text}
      </Link>
    </li>
  );
};

export default FilterItem;
