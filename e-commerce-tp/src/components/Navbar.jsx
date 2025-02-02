import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import IconButton from './IconButton';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  function handleLogout() {}

  return (
    <div className="mx-auto flex w-[90dvw] items-center justify-between rounded-lg border border-stone-600 bg-stone-50 px-5 py-2.5 shadow-sm">
      <ul className="flex items-center gap-3">
        <li>
          <span className="mr-5 font-bold">SHOP</span>
        </li>

        <li className="relative px-3 py-2">
          {activeIndex === 1 && (
            <motion.span
              layoutId="navlink"
              className="absolute inset-0 block rounded-full bg-stone-900"
            ></motion.span>
          )}
          <NavLink
            to={'/products'}
            className="relative"
            onClick={() => setActiveIndex(1)}
            // style={{ color: activeIndex === 1 ? '#ffffff' : '#000000' }}
          >
            Products
          </NavLink>
        </li>

        <li className="relative px-3 py-2">
          {activeIndex === 2 && (
            <motion.span
              layoutId="navlink"
              className="absolute inset-0 block rounded-full bg-stone-900"
            ></motion.span>
          )}
          <NavLink
            to={'/Category'}
            onClick={() => setActiveIndex(2)}
            className="relative"
          >
            Category
          </NavLink>
        </li>

        <li className="relative px-3 py-2">
          {activeIndex === 3 && (
            <motion.span
              layoutId="navlink"
              className="absolute inset-0 block rounded-full bg-stone-900"
            ></motion.span>
          )}
          <NavLink
            to={'/Contact-us'}
            onClick={() => setActiveIndex(3)}
            className="relative"
          >
            Contact us
          </NavLink>
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

          <AnimatePresence>
            {isOpen && (
              <motion.button
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: -20, transition: {} }}
                className="absolute right-0 z-10 mt-0.5 translate-x-5 rounded-lg bg-red-500 px-3 py-2 text-stone-50"
                onClick={handleLogout}
              >
                Logout
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
