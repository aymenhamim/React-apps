import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <li>
      <Link
        className={`rounded-md border border-stone-500 bg-stone-50 px-3 py-2 ${className}`}
        // to={`?category=${text}`}
        to={`?product=${text}`}
      >
        {text}
      </Link>
    </li>
  );
};

export default FilterItem;
