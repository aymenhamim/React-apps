import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import IconButton from './IconButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  function handleLogout() {}

  return (
    <div className="mx-auto flex w-[90dvw] items-center justify-between rounded-lg border border-stone-600 bg-stone-50 px-5 py-2.5 shadow-sm">
      <ul className="flex gap-3">
        <li>
          <span className="mr-5 font-bold">ThoumiSHOP</span>
        </li>
        <li>
          <NavLink to={'/products'}>Products</NavLink>
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
        <IconButton icon="search" size="md" />
        <IconButton
          icon="cart"
          size="lg"
          className="border-none"
          iconSize="w-6"
        />
        <div className="relative">
          <div
            className="ml-5 h-10 w-10 cursor-pointer overflow-hidden rounded-full border border-stone-800 bg-stone-700 duration-300 hover:scale-105"
            onClick={handleClick}
          >
            <img src="/img/profile1.png" alt="" className="h-full w-full" />
          </div>

          {isOpen && (
            <button
              className="absolute right-0 z-10 mt-0.5 translate-x-5 rounded-lg bg-red-500 px-3 py-2 text-stone-50"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
