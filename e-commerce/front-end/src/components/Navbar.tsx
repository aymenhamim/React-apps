import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const inputStyle =
  'w-full rounded-md border border-stone-300 bg-stone-50 px-3 py-2 pr-10 text-stone-600 outline-none ring-stone-300 transition-all duration-200 hover:border-stone-500 hover:bg-stone-100 focus:border-stone-500 focus:bg-stone-100 focus:ring-4 mb-2';

const Navbar: React.FC = () => {
  return (
    <div className="mx-auto flex w-[90dvw] items-center justify-between rounded-lg border border-stone-600 bg-stone-50 px-5 py-2.5 shadow-sm">
      <ul className="flex gap-3">
        <li>
          <span className="mr-5 font-bold">LOGO</span>
        </li>
        <li>
          <NavLink to={'/home'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/Category'}>Category</NavLink>
        </li>
        <li>
          <NavLink to={'/Contact-us'}>Contact us</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="w-[25dvw] rounded-full border border-stone-600 bg-stone-50 px-5 py-1 text-sm text-stone-900 outline-none transition-all hover:border-stone-500 hover:bg-stone-100 focus:border-stone-500 focus:bg-stone-100 focus:ring-4"
        />
        <div className="h-6 w-6 rounded-full bg-stone-700"></div>
        <div className="h-6 w-6 rounded-full bg-stone-700"></div>
        <div className="ml-5 h-8 w-8 rounded-full bg-stone-700"></div>
      </div>
    </div>
  );
};

export default Navbar;
