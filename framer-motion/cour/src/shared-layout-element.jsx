import { useState } from 'react';
import { motion } from 'framer-motion';

export const App = () => {
  /**
   * Like explained earlier: In the real world you probably have the state
   * of a router to tell you the active url. And on click you would update the state
   * in the router, which would then also show the correct active item.
   *
   * To simplify this example we keep track of the clicked index.
   */
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid min-h-dvh place-items-center bg-stone-900">
      <ul className="flex gap-3 rounded-xl bg-white px-3 py-2">
        <li className="relative px-2 py-1" onClick={() => setActiveIndex(0)}>
          {activeIndex === 0 && (
            <motion.span
              layoutId="navlink"
              className="absolute inset-0 block rounded-full bg-gray-300"
            ></motion.span>
          )}
          <a href="#" className="relative z-10">
            Home
          </a>
        </li>
        <li className="relative px-2 py-1" onClick={() => setActiveIndex(1)}>
          {activeIndex === 1 && (
            <motion.span
              layoutId="navlink"
              className="absolute inset-0 block rounded-full bg-gray-300"
            ></motion.span>
          )}
          <a href="#" className="relative z-10">
            About
          </a>
        </li>
        <li className="relative px-2 py-1" onClick={() => setActiveIndex(2)}>
          {activeIndex === 2 && (
            <motion.span
              layoutId="navlink"
              className="absolute inset-0 block rounded-full bg-gray-300"
            ></motion.span>
          )}
          <a href="#" className="relative z-10">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
